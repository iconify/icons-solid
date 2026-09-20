import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix4mo_g6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ix4mo_g6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bluetooth-x"} {...others} />);
}

export default Component;
