import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzj1nzb2x.css';
import '../../css/v/vwu041i_f.css';
import '../../css/h/h0cxnwb4j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qzj1nzb2x"/><path class="vwu041i_f"/><path class="h0cxnwb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-file-picture"} {...others} />);
}

export default Component;
