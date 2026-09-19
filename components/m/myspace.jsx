import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kywqgvmdz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kywqgvmdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:myspace"} {...others} />);
}

export default Component;
