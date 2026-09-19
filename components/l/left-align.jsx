import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywr37pcaq.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="ywr37pcaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:left-align"} {...others} />);
}

export default Component;
