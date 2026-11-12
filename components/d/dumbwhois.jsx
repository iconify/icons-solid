import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbxm3usqn.css';
import '../../css/l/lzg5bgbdw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wbxm3usqn"/><path class="lzg5bgbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbwhois"} {...others} />);
}

export default Component;
