import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu1nrd9jh.css';
import '../../css/g/g9iec9jch.css';
import '../../css/i/i7vrkybqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vu1nrd9jh"><path class="g9iec9jch"/><path class="i7vrkybqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aws"} {...others} />);
}

export default Component;
