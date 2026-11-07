import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj5b2hbei.css';
import '../../css/f/f4eetr8fi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj5b2hbei"/><path class="f4eetr8fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-2-bold-duotone"} {...others} />);
}

export default Component;
