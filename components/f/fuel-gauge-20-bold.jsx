import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e75-znlde.css';
import '../../css/m/mx7qgn1xx.css';
import '../../css/q/qviq0ilhh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e75-znlde"/><path class="mx7qgn1xx"/><path class="qviq0ilhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-gauge-20-bold"} {...others} />);
}

export default Component;
