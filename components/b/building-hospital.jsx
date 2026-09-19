import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxoh7_kwo.css';
import '../../css/j/jjd6ecb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxoh7_kwo"/><path class="jjd6ecb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:building-hospital"} {...others} />);
}

export default Component;
