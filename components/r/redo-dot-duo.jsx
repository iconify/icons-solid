import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_ni2-b3j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gjhv5h2xq.css';
import '../../css/c/c55ku496r.css';
import '../../css/s/scjaohbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_ni2-b3j secondary"/><g class="dt0cm9dhy primary"><path class="gjhv5h2xq"/><path class="c55ku496r"/><path class="scjaohbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:redo-dot-duo"} {...others} />);
}

export default Component;
