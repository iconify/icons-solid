import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzleqd5vl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzleqd5vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:barcode-line"} {...others} />);
}

export default Component;
