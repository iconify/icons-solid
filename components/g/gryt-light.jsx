import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubs1v_4lx.css';
import '../../css/d/dxhdilb2v.css';
import '../../css/g/g4y8tubxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ubs1v_4lx"/><path class="dxhdilb2v"/><path class="g4y8tubxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gryt-light"} {...others} />);
}

export default Component;
