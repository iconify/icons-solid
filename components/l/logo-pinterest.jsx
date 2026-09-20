import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po1nrc4wh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="po1nrc4wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-pinterest"} {...others} />);
}

export default Component;
