import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx8hyq68k.css';
import '../../css/v/v3ruk_beo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx8hyq68k"/><path class="v3ruk_beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microphone-slash"} {...others} />);
}

export default Component;
