import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm2232bcw.css';
import '../../css/e/ev2u2w4wz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm2232bcw"/><path class="ev2u2w4wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:miele"} {...others} />);
}

export default Component;
