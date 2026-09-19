import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx_1zebpd.css';
import '../../css/i/i2ck-cb3c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qx_1zebpd"/><path class="i2ck-cb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sight"} {...others} />);
}

export default Component;
