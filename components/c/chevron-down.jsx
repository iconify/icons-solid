import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eabxhopre.css';

const viewBox = {"width":1664,"height":1312};
const content = `<path class="eabxhopre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:chevron-down"} {...others} />);
}

export default Component;
