import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvx6_gzou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvx6_gzou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:octagon-x"} {...others} />);
}

export default Component;
