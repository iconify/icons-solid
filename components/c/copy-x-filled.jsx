import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuforsmvs.css';
import '../../css/r/r_3yuac4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yuforsmvs"/><path class="r_3yuac4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:copy-x-filled"} {...others} />);
}

export default Component;
