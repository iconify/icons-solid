import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgw8fbnzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgw8fbnzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chef-hat"} {...others} />);
}

export default Component;
