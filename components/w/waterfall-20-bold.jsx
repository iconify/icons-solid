import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoo3f_wso.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eoo3f_wso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waterfall-20-bold"} {...others} />);
}

export default Component;
