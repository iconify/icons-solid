import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qfamx3byj.css';
import '../../css/b/bvqtxjp8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qfamx3byj"/><path class="bvqtxjp8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:hidden"} {...others} />);
}

export default Component;
