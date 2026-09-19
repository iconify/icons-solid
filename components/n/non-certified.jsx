import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwx_s704a.css';
import '../../css/q/qwe3y-4yj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zwx_s704a"/><path class="qwe3y-4yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:non-certified"} {...others} />);
}

export default Component;
