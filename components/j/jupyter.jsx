import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvr969ois.css';
import '../../css/w/wuqa13gqk.css';
import '../../css/w/wsyyf2bqs.css';
import '../../css/q/qw_fs9bys.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qvr969ois"/><path class="wuqa13gqk"/><path class="wsyyf2bqs"/><path class="qw_fs9bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jupyter"} {...others} />);
}

export default Component;
