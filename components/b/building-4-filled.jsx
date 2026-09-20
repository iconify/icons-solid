import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxjr4wgbv.css';
import '../../css/z/z-gn40b5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxjr4wgbv"/><path class="z-gn40b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-4-filled"} {...others} />);
}

export default Component;
