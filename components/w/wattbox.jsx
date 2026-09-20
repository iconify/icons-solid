import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfc-29bll.css';
import '../../css/x/x_p186bjn.css';
import '../../css/a/a0c8erb8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kfc-29bll"/><path class="x_p186bjn"/><path class="a0c8erb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wattbox"} {...others} />);
}

export default Component;
