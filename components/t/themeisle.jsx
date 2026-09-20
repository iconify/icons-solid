import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzik2n9kx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yzik2n9kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:themeisle"} {...others} />);
}

export default Component;
