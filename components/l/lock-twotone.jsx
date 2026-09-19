import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh0_ewbrk.css';
import '../../css/b/bwbmeku4p.css';
import '../../css/y/yp5ecdcuz.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="sh0_ewbrk"/><path class="bwbmeku4p"/><path class="yp5ecdcuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:lock-twotone"} {...others} />);
}

export default Component;
