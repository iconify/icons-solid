import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/libpo1h3c.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="libpo1h3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:telegram-plane"} {...others} />);
}

export default Component;
