import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4ihiqo8l.css';
import '../../css/f/fbuv3ib1d.css';
import '../../css/i/i81jb4lpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4ihiqo8l"/><path class="fbuv3ib1d"/><path class="i81jb4lpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:prime"} {...others} />);
}

export default Component;
