import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj8u2ybur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj8u2ybur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:volume-minus"} {...others} />);
}

export default Component;
