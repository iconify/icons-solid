import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/goe3xfbbk.css';
import '../../css/f/flwjdpt_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="goe3xfbbk"/><path class="flwjdpt_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-payment-sign-2"} {...others} />);
}

export default Component;
