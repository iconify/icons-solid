import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu7nefmvr.css';
import '../../css/e/ea0a-8box.css';

const viewBox = {"width":16,"height":12};
const content = `<path class="tu7nefmvr"/><path class="ea0a-8box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:link"} {...others} />);
}

export default Component;
