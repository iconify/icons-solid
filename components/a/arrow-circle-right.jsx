import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afci7hbne.css';
import '../../css/g/g1m3d2bxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="afci7hbne"/><path class="g1m3d2bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-circle-right"} {...others} />);
}

export default Component;
