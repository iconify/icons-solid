import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_t-l-btv.css';
import '../../css/h/h6g7afq-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_t-l-btv"/><path class="h6g7afq-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-3-bold"} {...others} />);
}

export default Component;
