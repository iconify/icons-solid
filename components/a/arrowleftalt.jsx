import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrx4z5b2m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yrx4z5b2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:arrowleftalt"} {...others} />);
}

export default Component;
