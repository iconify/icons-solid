import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-2ahia8o.css';

const viewBox = {"width":34,"height":32};
const content = `<path class="t-2ahia8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:paperclip"} {...others} />);
}

export default Component;
