import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo2yj5prd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qo2yj5prd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:camera"} {...others} />);
}

export default Component;
