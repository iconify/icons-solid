import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwjf8rbtq.css';
import '../../css/k/kt2n2bc1q.css';
import '../../css/u/u3a-uq48a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="uwjf8rbtq"/><path class="kt2n2bc1q"/><path class="u3a-uq48a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mallet-duo"} {...others} />);
}

export default Component;
