import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u__b9iwlh.css';
import '../../css/w/wqtak9bex.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u__b9iwlh"/><path class="wqtak9bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:building"} {...others} />);
}

export default Component;
