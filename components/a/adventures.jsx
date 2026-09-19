import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp1g0i7no.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zp1g0i7no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:adventures"} {...others} />);
}

export default Component;
