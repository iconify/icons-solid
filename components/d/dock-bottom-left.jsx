import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9sq7n4kc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9sq7n4kc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-bottom-left"} {...others} />);
}

export default Component;
