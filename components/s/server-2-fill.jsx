import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0a2-vbzo.css';
import '../../css/c/c9bbww2xk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0a2-vbzo"/><path class="c9bbww2xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:server-2-fill"} {...others} />);
}

export default Component;
