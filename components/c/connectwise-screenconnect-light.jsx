import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5549tbpb.css';
import '../../css/z/zr90yfbxo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d5549tbpb"/><path class="zr90yfbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:connectwise-screenconnect-light"} {...others} />);
}

export default Component;
