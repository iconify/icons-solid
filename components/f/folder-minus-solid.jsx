import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3hasmbtc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k3hasmbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:folder-minus-solid"} {...others} />);
}

export default Component;
