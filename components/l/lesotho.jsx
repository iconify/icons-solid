import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/t/ty0x_qewu.css';
import '../../css/a/aqt2kdbol.css';
import '../../css/w/w36ns7bac.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="ty0x_qewu"/><path class="aqt2kdbol"/><path class="w36ns7bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:lesotho"} {...others} />);
}

export default Component;
