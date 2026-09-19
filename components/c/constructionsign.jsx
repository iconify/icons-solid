import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw9fgdciv.css';
import '../../css/f/fcozcbcdu.css';
import '../../css/v/vuax4ju9q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dw9fgdciv"/><path class="fcozcbcdu"/><path class="vuax4ju9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:constructionsign"} {...others} />);
}

export default Component;
