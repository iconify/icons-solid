import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snaubdbur.css';
import '../../css/z/zh_kfpbbn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="snaubdbur"/><path class="zh_kfpbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frankmd-dark"} {...others} />);
}

export default Component;
