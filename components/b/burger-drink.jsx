import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usc8o6-bs.css';
import '../../css/r/rqhj3y1_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usc8o6-bs"/><path class="rqhj3y1_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:burger-drink"} {...others} />);
}

export default Component;
