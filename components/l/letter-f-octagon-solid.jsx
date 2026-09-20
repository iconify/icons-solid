import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_iqll3qt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_iqll3qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-f-octagon-solid"} {...others} />);
}

export default Component;
