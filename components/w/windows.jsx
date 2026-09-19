import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/secm1-tlc.css';
import '../../css/o/ozzrz2p5p.css';
import '../../css/v/v_3i9wmxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secm1-tlc"/><path class="ozzrz2p5p"/><path class="v_3i9wmxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:windows"} {...others} />);
}

export default Component;
