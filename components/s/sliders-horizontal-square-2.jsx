import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw0ywobnf.css';
import '../../css/i/i06twubnv.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="pw0ywobnf"/><path clip-rule="evenodd" class="i06twubnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sliders-horizontal-square-2"} {...others} />);
}

export default Component;
