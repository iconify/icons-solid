import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk3vthbjv.css';
import '../../css/e/ewd4-9b-y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nk3vthbjv"/><circle class="ewd4-9b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:camera"} {...others} />);
}

export default Component;
