import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw3_kmb9z.css';
import '../../css/r/r9zynwktx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw3_kmb9z"/><path class="r9zynwktx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-web-form-drop-down-menu-form-3-bold"} {...others} />);
}

export default Component;
