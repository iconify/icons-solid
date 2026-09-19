import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0v5j32xh.css';
import '../../css/o/oyqn7db8r.css';
import '../../css/x/xh-5y4zrj.css';
import '../../css/f/f3dzgwbyc.css';
import '../../css/c/cltii3ber.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f0v5j32xh"/><path class="oyqn7db8r"/><path clip-rule="evenodd" class="xh-5y4zrj"/><path class="f3dzgwbyc"/><path class="cltii3ber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:king"} {...others} />);
}

export default Component;
