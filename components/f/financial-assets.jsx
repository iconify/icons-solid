import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2k3qxhyw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n2k3qxhyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:financial-assets"} {...others} />);
}

export default Component;
