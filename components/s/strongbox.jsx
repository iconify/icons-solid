import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j51dv817o.css';
import '../../css/v/v37v3sbeg.css';
import '../../css/d/dfqrkobme.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkZkHfbIA"><g class="ft5dv1b6b"><path class="j51dv817o"/><path class="v37v3sbeg"/><path class="dfqrkobme"/></g></mask></defs><path mask="url(#SVGkZkHfbIA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:strongbox"} {...others} />);
}

export default Component;
