import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae_s_snbl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ae_s_snbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:load-balancer-global"} {...others} />);
}

export default Component;
