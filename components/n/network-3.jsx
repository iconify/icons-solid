import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knsyygmgu.css';
import '../../css/a/a6hum9hrz.css';
import '../../css/d/doyyo9bqt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="knsyygmgu"/><path class="a6hum9hrz"/><path class="doyyo9bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:network-3"} {...others} />);
}

export default Component;
