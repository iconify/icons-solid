import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nffkq2bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nffkq2bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-tencentmeeting-filled"} {...others} />);
}

export default Component;
