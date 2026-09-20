import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zkzw0rzjy.css';
import '../../css/z/z3lg7fbtq.css';
import '../../css/y/y4dwb8q1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zkzw0rzjy"/><path class="z3lg7fbtq"/><path class="y4dwb8q1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:workflow-teamwork-user-high-five"} {...others} />);
}

export default Component;
