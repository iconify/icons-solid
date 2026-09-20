import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd85a1byy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wd85a1byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:blackberry"} {...others} />);
}

export default Component;
