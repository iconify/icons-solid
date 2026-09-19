import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxj-53b3o.css';
import '../../css/v/vdkkambso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxj-53b3o"/><path class="vdkkambso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:x-circle"} {...others} />);
}

export default Component;
