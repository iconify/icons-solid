import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm2_xkwlg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm2_xkwlg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cash-multiple"} {...others} />);
}

export default Component;
