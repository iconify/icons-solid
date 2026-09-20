import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_82q38za.css';

const viewBox = {"width":17,"height":25,"left":4};
const content = `<path class="s_82q38za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:radix-ui-light"} {...others} />);
}

export default Component;
