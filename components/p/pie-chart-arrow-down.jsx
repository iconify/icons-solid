import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywh_racvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ywh_racvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:pie-chart-arrow-down"} {...others} />);
}

export default Component;
