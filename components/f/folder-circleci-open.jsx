import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s37u5-ydv.css';
import '../../css/i/i_82ckbxh.css';
import '../../css/k/kbdolkbrx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s37u5-ydv"/><path class="i_82ckbxh"/><circle class="kbdolkbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-circleci-open"} {...others} />);
}

export default Component;
