import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ice-5lmvf.css';
import '../../css/o/oafign_da.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ice-5lmvf"/><path class="oafign_da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pizza"} {...others} />);
}

export default Component;
