import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp471zbxk.css';
import '../../css/z/z53wpybvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yp471zbxk"/><path class="z53wpybvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:virus"} {...others} />);
}

export default Component;
