import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwvo3mbkm.css';
import '../../css/h/h_3msknem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwvo3mbkm"/><path clip-rule="evenodd" class="h_3msknem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siderbar-bold"} {...others} />);
}

export default Component;
