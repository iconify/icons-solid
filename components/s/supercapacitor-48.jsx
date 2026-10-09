import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep5t2hqnv.css';
import '../../css/z/z05d-bcpb.css';
import '../../css/j/j1fn-ib4w.css';
import '../../css/d/d8t2v1dij.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ep5t2hqnv"/><path class="z05d-bcpb"/><path class="j1fn-ib4w"/><path class="d8t2v1dij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supercapacitor-48"} {...others} />);
}

export default Component;
