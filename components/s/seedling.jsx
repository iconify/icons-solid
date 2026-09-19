import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/et3i3ja-x.css';
import '../../css/f/fzjlzb7dq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfRFtuddH"><g class="aql7dnt-u"><path class="et3i3ja-x"/><path class="fzjlzb7dq"/></g></mask></defs><path mask="url(#SVGfRFtuddH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:seedling"} {...others} />);
}

export default Component;
