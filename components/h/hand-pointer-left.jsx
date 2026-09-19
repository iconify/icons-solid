import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqtcx1wqq.css';

const viewBox = {"width":432,"height":448};
const content = `<path class="vqtcx1wqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:hand-pointer-left"} {...others} />);
}

export default Component;
