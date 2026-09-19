import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf838kbvj.css';
import '../../css/h/hp757egpp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zf838kbvj"/><path class="hp757egpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-straight-right-filled"} {...others} />);
}

export default Component;
