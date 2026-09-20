import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq9vwg0wj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cq9vwg0wj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:artboard-fill"} {...others} />);
}

export default Component;
