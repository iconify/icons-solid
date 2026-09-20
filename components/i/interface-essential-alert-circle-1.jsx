import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwz563b2r.css';
import '../../css/e/e_3s_pztg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cwz563b2r"/><path class="e_3s_pztg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-alert-circle-1"} {...others} />);
}

export default Component;
