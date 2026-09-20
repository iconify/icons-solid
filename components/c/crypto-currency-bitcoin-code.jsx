import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gnzl7wbik.css';
import '../../css/i/it_bg6bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gnzl7wbik"/><path class="it_bg6bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-currency-bitcoin-code"} {...others} />);
}

export default Component;
