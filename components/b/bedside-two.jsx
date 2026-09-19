import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fghv1qb6b.css';
import '../../css/v/vtcx4tbpp.css';
import '../../css/i/iv925zzmn.css';
import '../../css/j/jcrlfrbgh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgtKiTdXu"><g class="aql7dnt-u"><path class="fghv1qb6b"/><path class="vtcx4tbpp"/><path clip-rule="evenodd" class="iv925zzmn"/><path class="jcrlfrbgh"/></g></mask></defs><path mask="url(#SVGgtKiTdXu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bedside-two"} {...others} />);
}

export default Component;
