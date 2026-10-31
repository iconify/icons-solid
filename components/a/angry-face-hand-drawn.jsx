import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zw9dqqujn.css';
import '../../css/j/jqyldpb0f.css';
import '../../css/e/elua1hl3z.css';
import '../../css/o/o2-e-gk7e.css';
import '../../css/m/myqjtsb0u.css';
import '../../css/n/nsym2lljg.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zw9dqqujn"/><path class="jqyldpb0f"/><path class="elua1hl3z"/><path class="o2-e-gk7e"/><path class="myqjtsb0u"/><path class="nsym2lljg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:angry-face-hand-drawn"} {...others} />);
}

export default Component;
