import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sssou3bkf.css';
import '../../css/y/ybhu5ybua.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sssou3bkf"/><path class="ybhu5ybua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-pal"} {...others} />);
}

export default Component;
