import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plt0i6b8y.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="plt0i6b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chart-square-bar"} {...others} />);
}

export default Component;
