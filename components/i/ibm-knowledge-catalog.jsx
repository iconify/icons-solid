import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkgkj5b7c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kkgkj5b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-knowledge-catalog"} {...others} />);
}

export default Component;
