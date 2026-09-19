import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8u4d0zwp.css';
import '../../css/m/ms064kbuz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i8u4d0zwp"/><path class="ms064kbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:map-boundary"} {...others} />);
}

export default Component;
