import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1_q84b1c.css';
import '../../css/f/fzhucbcoy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1_q84b1c"/><path class="fzhucbcoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bowling-20-bold"} {...others} />);
}

export default Component;
