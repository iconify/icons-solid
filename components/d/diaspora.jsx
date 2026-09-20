import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wln7cnp3w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wln7cnp3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:diaspora"} {...others} />);
}

export default Component;
