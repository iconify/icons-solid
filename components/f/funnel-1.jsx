import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxprrt3ft.css';

const viewBox = {"width":25,"height":25};
const content = `<path clip-rule="evenodd" class="qxprrt3ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:funnel-1"} {...others} />);
}

export default Component;
