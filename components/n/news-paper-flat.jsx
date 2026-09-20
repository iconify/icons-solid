import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhdq7k5mm.css';
import '../../css/o/oeqx-6bus.css';
import '../../css/k/k2wv4j0go.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bhdq7k5mm"/><path class="oeqx-6bus"/><path clip-rule="evenodd" class="k2wv4j0go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:news-paper-flat"} {...others} />);
}

export default Component;
