import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri-d8bcfx.css';
import '../../css/b/b7j_n5anm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ri-d8bcfx"/><path class="b7j_n5anm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:archive"} {...others} />);
}

export default Component;
