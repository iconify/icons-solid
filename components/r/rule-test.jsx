import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2f_gjbjf.css';
import '../../css/i/ikg83ac8f.css';
import '../../css/f/fvmh2ibcr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d2f_gjbjf"/><path class="ikg83ac8f"/><path class="fvmh2ibcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rule-test"} {...others} />);
}

export default Component;
