import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiv2u-b4i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kiv2u-b4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:500px-5"} {...others} />);
}

export default Component;
