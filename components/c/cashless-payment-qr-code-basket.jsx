import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y555xkbow.css';
import '../../css/d/dqclsvbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y555xkbow"/><path class="dqclsvbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cashless-payment-qr-code-basket"} {...others} />);
}

export default Component;
