import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wenjm8pzd.css';
import '../../css/q/qbrh19bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wenjm8pzd"/><path class="qbrh19bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-swap"} {...others} />);
}

export default Component;
