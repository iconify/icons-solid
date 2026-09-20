import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a178mxb4x.css';
import '../../css/k/kxminbc8t.css';

const viewBox = {"width":166.73,"height":36.738};
const content = `<path class="a178mxb4x"/><path class="kxminbc8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kakao-bank"} {...others} />);
}

export default Component;
