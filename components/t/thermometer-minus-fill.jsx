import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqy0_y_xf.css';
import '../../css/w/w4-6i1bne.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="qqy0_y_xf"/><path class="w4-6i1bne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:thermometer-minus-fill"} {...others} />);
}

export default Component;
