import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdc_7m84r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdc_7m84r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:currency-rupee"} {...others} />);
}

export default Component;
