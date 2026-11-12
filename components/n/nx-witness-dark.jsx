import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kegoc-59e.css';
import '../../css/y/yn5w2kbbj.css';
import '../../css/u/uc21-y-ff.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kegoc-59e"/><path class="yn5w2kbbj"/><path class="uc21-y-ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nx-witness-dark"} {...others} />);
}

export default Component;
