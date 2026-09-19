import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y17g8zbpp.css';
import '../../css/f/fqr8fbbds.css';
import '../../css/k/kji6j-bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y17g8zbpp"/><path class="fqr8fbbds"/><path class="kji6j-bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow"} {...others} />);
}

export default Component;
