import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_g3mrghf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_g3mrghf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:replay-30-line"} {...others} />);
}

export default Component;
