import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4_4mjb9l.css';
import '../../css/u/u3-0qjcak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4_4mjb9l"/><path class="u3-0qjcak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incoming-call-rounded-bold"} {...others} />);
}

export default Component;
