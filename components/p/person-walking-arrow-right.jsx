import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-iqkzb1t.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="c-iqkzb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:person-walking-arrow-right"} {...others} />);
}

export default Component;
