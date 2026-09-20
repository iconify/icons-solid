import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crd2_n-ve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crd2_n-ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:red-packet-line"} {...others} />);
}

export default Component;
