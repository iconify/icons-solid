import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltuu1s2eo.css';
import '../../css/q/qu5j37bnx.css';
import '../../css/b/bg_cubciy.css';

const viewBox = {"width":122.5,"height":122.5};
const content = `<path class="ltuu1s2eo"/><path class="qu5j37bnx"/><path class="bg_cubciy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kubevela-light"} {...others} />);
}

export default Component;
