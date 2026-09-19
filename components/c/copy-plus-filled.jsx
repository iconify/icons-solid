import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgq_0cbvv.css';
import '../../css/y/yuforsmvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgq_0cbvv"/><path class="yuforsmvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:copy-plus-filled"} {...others} />);
}

export default Component;
