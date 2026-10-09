import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaa-d32jp.css';
import '../../css/q/qigsuypiz.css';
import '../../css/c/c8bngupzy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eaa-d32jp"/><path class="qigsuypiz"/><path class="c8bngupzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cupcake-20-bold"} {...others} />);
}

export default Component;
