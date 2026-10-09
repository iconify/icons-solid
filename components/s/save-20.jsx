import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbnoic5rd.css';
import '../../css/m/m-8nc9b7n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lbnoic5rd"/><path class="m-8nc9b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:save-20"} {...others} />);
}

export default Component;
