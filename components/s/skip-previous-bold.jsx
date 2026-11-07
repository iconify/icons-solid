import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kerg8qktr.css';
import '../../css/w/wjmxqyb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kerg8qktr"/><path class="wjmxqyb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-previous-bold"} {...others} />);
}

export default Component;
