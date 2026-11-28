import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7up-acjy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-6n-baq.css';
import '../../css/z/zb9fuvb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v7up-acjy"/><g class="dt0cm9dhy primary"><path class="te-6n-baq"/><path class="zb9fuvb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tablet-duo"} {...others} />);
}

export default Component;
