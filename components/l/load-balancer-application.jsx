import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq2n3-29f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eq2n3-29f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:load-balancer-application"} {...others} />);
}

export default Component;
