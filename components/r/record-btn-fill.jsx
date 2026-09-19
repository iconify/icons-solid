import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jssep6alm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jssep6alm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:record-btn-fill"} {...others} />);
}

export default Component;
