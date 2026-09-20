import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb-64f8xt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tb-64f8xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:poeticmetric-light"} {...others} />);
}

export default Component;
