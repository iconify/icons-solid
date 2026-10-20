import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wm26qcilw.css';
import '../../css/j/jlpzeeb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wm26qcilw"/><path class="jlpzeeb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:term-count"} {...others} />);
}

export default Component;
