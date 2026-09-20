import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_ls31byv.css';
import '../../css/v/vqc8gykwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_ls31byv"/><path class="vqc8gykwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:soneium"} {...others} />);
}

export default Component;
