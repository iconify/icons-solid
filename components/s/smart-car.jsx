import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a40r9nbyy.css';
import '../../css/h/h6o4s7bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a40r9nbyy"/><path class="h6o4s7bkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-car"} {...others} />);
}

export default Component;
