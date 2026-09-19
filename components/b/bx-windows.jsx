import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hknn8vb1a.css';
import '../../css/k/ko05ptbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hknn8vb1a"/><path class="ko05ptbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-windows"} {...others} />);
}

export default Component;
