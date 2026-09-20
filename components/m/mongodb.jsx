import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf5strfwg.css';
import '../../css/m/m-15fobun.css';
import '../../css/m/m_3d8hblg.css';
import '../../css/o/oid2twx0v.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="hf5strfwg"/><path class="m-15fobun"/><path class="m_3d8hblg"/><path class="oid2twx0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:mongodb"} {...others} />);
}

export default Component;
