import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn2ue_csy.css';
import '../../css/p/p6thd6bpb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="zn2ue_csy"/><path class="p6thd6bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:share"} {...others} />);
}

export default Component;
