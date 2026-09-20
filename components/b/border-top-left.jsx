import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-33b3hhe.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="p-33b3hhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:border-top-left"} {...others} />);
}

export default Component;
