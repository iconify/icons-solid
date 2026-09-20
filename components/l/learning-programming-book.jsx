import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfpfxmb4b.css';
import '../../css/i/i7oxkab5v.css';
import '../../css/c/cwx-hqb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfpfxmb4b"/><path class="i7oxkab5v"/><path class="cwx-hqb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:learning-programming-book"} {...others} />);
}

export default Component;
