import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytc-hrbpf.css';
import '../../css/x/xtnb74b1o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ytc-hrbpf"/><path class="xtnb74b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:noodle-bowl"} {...others} />);
}

export default Component;
