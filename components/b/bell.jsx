import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7xm-fxfh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x7xm-fxfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:bell"} {...others} />);
}

export default Component;
