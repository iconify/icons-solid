import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk_q_y77v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk_q_y77v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:align-right-justify"} {...others} />);
}

export default Component;
