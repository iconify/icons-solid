import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrmf1gb-i.css';
import '../../css/s/sf1cmcczv.css';
import '../../css/q/q0i1j3b0k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hrmf1gb-i"/><path class="sf1cmcczv"/><path class="q0i1j3b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:subflow"} {...others} />);
}

export default Component;
