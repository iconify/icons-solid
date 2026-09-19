import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu6la5bgc.css';
import '../../css/f/fhhuixbxf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tu6la5bgc"/><path class="fhhuixbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:exit-fill-16"} {...others} />);
}

export default Component;
