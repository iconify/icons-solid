import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojnu-8dvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojnu-8dvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-horizontal-line"} {...others} />);
}

export default Component;
