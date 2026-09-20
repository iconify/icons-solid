import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xybxuobap.css';
import '../../css/n/nu04c2bfa.css';
import '../../css/d/d490hebuh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xybxuobap"/><path class="nu04c2bfa"/><path class="d490hebuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-message"} {...others} />);
}

export default Component;
