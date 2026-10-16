import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uexd2bbpi.css';
import '../../css/q/qan8ow8hl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uexd2bbpi"/><path class="qan8ow8hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reactor-20-bold"} {...others} />);
}

export default Component;
