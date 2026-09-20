import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw-bguxsi.css';
import '../../css/q/qx1z26mll.css';
import '../../css/e/e907rnzaq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tw-bguxsi"/><path class="qx1z26mll"/><path class="e907rnzaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-phone-tablet"} {...others} />);
}

export default Component;
