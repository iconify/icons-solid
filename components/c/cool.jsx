import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb2wwnbzj.css';
import '../../css/k/kc5z_3btr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="pb2wwnbzj"/><path class="kc5z_3btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cool"} {...others} />);
}

export default Component;
