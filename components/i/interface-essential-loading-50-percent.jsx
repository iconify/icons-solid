import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idkbi6nqj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="idkbi6nqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-loading-50-percent"} {...others} />);
}

export default Component;
