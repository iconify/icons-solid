import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drv6t-b4e.css';
import '../../css/j/jnwm9c43p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="drv6t-b4e"/><path class="jnwm9c43p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:theta"} {...others} />);
}

export default Component;
