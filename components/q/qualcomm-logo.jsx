import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiy1g7h8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xiy1g7h8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:qualcomm-logo"} {...others} />);
}

export default Component;
