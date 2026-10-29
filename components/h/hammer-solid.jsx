import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a-spknb2z.css';
import '../../css/f/f7_5n5bel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="a-spknb2z"/><path class="f7_5n5bel wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hammer-solid"} {...others} />);
}

export default Component;
