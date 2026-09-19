import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-je94bsz.css';
import '../../css/o/oz6v0cqzz.css';
import '../../css/x/x01h8kb6t.css';
import '../../css/u/u1pyc2bti.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u-je94bsz"/><path class="oz6v0cqzz"/><path clip-rule="evenodd" class="x01h8kb6t"/><path class="u1pyc2bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scissors-bold"} {...others} />);
}

export default Component;
