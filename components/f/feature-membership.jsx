import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr1e2hb_o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qr1e2hb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:feature-membership"} {...others} />);
}

export default Component;
