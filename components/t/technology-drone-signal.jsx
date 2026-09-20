import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdygn-ngl.css';
import '../../css/h/hq8skxj4p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cdygn-ngl"/><path class="hq8skxj4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:technology-drone-signal"} {...others} />);
}

export default Component;
