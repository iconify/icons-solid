import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtwe9kb1j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vtwe9kb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cross-tab"} {...others} />);
}

export default Component;
