import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t44iphbtl.css';
import '../../css/x/xq-7rxmzv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t44iphbtl"/><path class="xq-7rxmzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:box"} {...others} />);
}

export default Component;
