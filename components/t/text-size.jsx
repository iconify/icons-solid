import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hde9zom3i.css';
import '../../css/d/di_8scctl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hde9zom3i"/><path class="di_8scctl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:text-size"} {...others} />);
}

export default Component;
