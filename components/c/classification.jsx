import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qerqc_trz.css';
import '../../css/g/g3fxfcd6n.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="qerqc_trz"/><path class="g3fxfcd6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:classification"} {...others} />);
}

export default Component;
