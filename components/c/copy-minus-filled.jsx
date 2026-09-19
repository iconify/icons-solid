import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp69nyjcq.css';
import '../../css/y/yuforsmvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp69nyjcq"/><path class="yuforsmvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:copy-minus-filled"} {...others} />);
}

export default Component;
