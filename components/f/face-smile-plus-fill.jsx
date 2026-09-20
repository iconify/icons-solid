import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf_wbmbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf_wbmbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:face-smile-plus-fill"} {...others} />);
}

export default Component;
