import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ethcq8boj.css';
import '../../css/s/sit0_i-ty.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ethcq8boj"/><path class="sit0_i-ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:face-add"} {...others} />);
}

export default Component;
