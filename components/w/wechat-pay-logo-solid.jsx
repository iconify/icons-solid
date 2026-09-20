import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciwaa8b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ciwaa8b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:wechat-pay-logo-solid"} {...others} />);
}

export default Component;
