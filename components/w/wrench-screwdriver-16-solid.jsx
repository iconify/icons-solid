import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nky2nab7l.css';
import '../../css/t/t0669_bln.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nky2nab7l"/><path class="t0669_bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:wrench-screwdriver-16-solid"} {...others} />);
}

export default Component;
