import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9_ln-zng.css';
import '../../css/e/evqnqysoc.css';
import '../../css/l/l7jrfcblp.css';
import '../../css/p/pjisd3-zr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a9_ln-zng"/><path class="evqnqysoc"/><path class="l7jrfcblp"/><path class="pjisd3-zr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:book-open-bookmark-3"} {...others} />);
}

export default Component;
