import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubob10ayu.css';
import '../../css/t/tl4woi6ej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubob10ayu"/><path class="tl4woi6ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:medal"} {...others} />);
}

export default Component;
