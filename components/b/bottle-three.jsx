import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/ripdjiu2y.css';
import '../../css/a/ay193v_1u.css';
import '../../css/x/x4fc4db_d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG12ZJyczv"><g class="aql7dnt-u"><path class="ripdjiu2y"/><path class="ay193v_1u"/><rect class="x4fc4db_d"/></g></mask></defs><path mask="url(#SVG12ZJyczv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bottle-three"} {...others} />);
}

export default Component;
