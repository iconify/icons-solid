import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie2v4kb6j.css';
import '../../css/i/id7d1qbgo.css';
import '../../css/x/xraqxobnj.css';
import '../../css/l/l9paz7bvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ie2v4kb6j"/><path class="id7d1qbgo"/><path class="xraqxobnj"/><path class="l9paz7bvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:croissant-duotone"} {...others} />);
}

export default Component;
