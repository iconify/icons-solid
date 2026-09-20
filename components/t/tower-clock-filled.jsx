import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l37jp9bzw.css';
import '../../css/t/t54c4pnar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l37jp9bzw"/><path class="t54c4pnar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tower-clock-filled"} {...others} />);
}

export default Component;
