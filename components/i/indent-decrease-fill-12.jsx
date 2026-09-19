import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xadmxrn2z.css';
import '../../css/d/dssw0v5yn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xadmxrn2z"/><path class="dssw0v5yn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:indent-decrease-fill-12"} {...others} />);
}

export default Component;
