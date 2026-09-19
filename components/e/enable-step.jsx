import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrqw_eyts.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qrqw_eyts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:enable-step"} {...others} />);
}

export default Component;
