import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6yfbr_kd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6yfbr_kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chart-b"} {...others} />);
}

export default Component;
