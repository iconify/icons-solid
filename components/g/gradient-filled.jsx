import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l69rg0b1y.css';
import '../../css/f/f6ypmdp8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l69rg0b1y"/><path class="f6ypmdp8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gradient-filled"} {...others} />);
}

export default Component;
