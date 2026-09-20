import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp3swzbkr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qp3swzbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-crossover-right"} {...others} />);
}

export default Component;
