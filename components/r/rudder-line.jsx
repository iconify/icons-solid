import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpt8t_sgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpt8t_sgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rudder-line"} {...others} />);
}

export default Component;
