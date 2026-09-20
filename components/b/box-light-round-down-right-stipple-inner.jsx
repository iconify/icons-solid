import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqw0mlbbm.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="xqw0mlbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-round-down-right-stipple-inner"} {...others} />);
}

export default Component;
