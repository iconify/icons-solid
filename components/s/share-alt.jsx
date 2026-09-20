import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alh4-efxe.css';
import '../../css/p/p6thd6bpb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="alh4-efxe"/><path class="p6thd6bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:share-alt"} {...others} />);
}

export default Component;
