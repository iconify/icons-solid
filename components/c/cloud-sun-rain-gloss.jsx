import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c7bc9jb7k.css';
import '../../css/p/pqt3wdp_a.css';
import '../../css/y/y5c60db7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c7bc9jb7k wm-k"/><path class="pqt3wdp_a wm-a"/><path class="wm-s y5c60db7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-rain-gloss"} {...others} />);
}

export default Component;
