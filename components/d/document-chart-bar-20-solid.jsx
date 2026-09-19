import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epy0a-u5i.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="epy0a-u5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-chart-bar-20-solid"} {...others} />);
}

export default Component;
