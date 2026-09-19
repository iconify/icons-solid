import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7f-vm4dn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g7f-vm4dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:waving-hand"} {...others} />);
}

export default Component;
