import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf_ch9b5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf_ch9b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:layout-right-2-line"} {...others} />);
}

export default Component;
