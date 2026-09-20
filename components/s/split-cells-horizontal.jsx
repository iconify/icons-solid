import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upsrkxb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="upsrkxb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:split-cells-horizontal"} {...others} />);
}

export default Component;
