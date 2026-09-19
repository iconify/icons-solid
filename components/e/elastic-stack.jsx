import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw54uz_0i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kw54uz_0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:elastic-stack"} {...others} />);
}

export default Component;
