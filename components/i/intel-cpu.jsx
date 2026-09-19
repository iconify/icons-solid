import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo7m9ebwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oo7m9ebwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:intel-cpu"} {...others} />);
}

export default Component;
