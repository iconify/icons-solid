import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyau3c7zj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kyau3c7zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:phone-alt"} {...others} />);
}

export default Component;
