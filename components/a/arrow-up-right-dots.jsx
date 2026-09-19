import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_8yhzb5m.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="c_8yhzb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:arrow-up-right-dots"} {...others} />);
}

export default Component;
