import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzvbfpb6b.css';
import '../../css/b/b81wimuvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uzvbfpb6b"/><path class="b81wimuvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maloja"} {...others} />);
}

export default Component;
