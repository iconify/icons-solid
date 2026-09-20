import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu-ylk7ly.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tu-ylk7ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-green-house-glass-building-plants-crops-produce-farm"} {...others} />);
}

export default Component;
