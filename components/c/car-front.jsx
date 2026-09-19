import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl7c8kphf.css';
import '../../css/j/ja_pkqero.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tl7c8kphf"/><path class="ja_pkqero"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:car-front"} {...others} />);
}

export default Component;
