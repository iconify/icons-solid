import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qisnddmbb.css';
import '../../css/i/i5r18_m4w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qisnddmbb"/><path class="i5r18_m4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-hat-48"} {...others} />);
}

export default Component;
