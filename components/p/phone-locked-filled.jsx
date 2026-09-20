import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1arq4b0h.css';
import '../../css/w/wo_8mcpow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1arq4b0h"/><path class="wo_8mcpow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:phone-locked-filled"} {...others} />);
}

export default Component;
