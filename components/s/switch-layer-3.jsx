import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzr0lxblt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xzr0lxblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:switch-layer-3"} {...others} />);
}

export default Component;
