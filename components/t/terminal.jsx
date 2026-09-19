import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzg1bwb1s.css';
import '../../css/v/vfddtzbiw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nzg1bwb1s"/><path class="vfddtzbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:terminal"} {...others} />);
}

export default Component;
