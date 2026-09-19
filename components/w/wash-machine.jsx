import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s-6837b2b.css';
import '../../css/b/bn4aif9mj.css';
import '../../css/r/rpm122kqc.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="s-6837b2b"/><path class="bn4aif9mj"/><path class="rpm122kqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wash-machine"} {...others} />);
}

export default Component;
