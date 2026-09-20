import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtge1ybso.css';
import '../../css/u/ujy_e8uzq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vtge1ybso"/><path class="ujy_e8uzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-like"} {...others} />);
}

export default Component;
