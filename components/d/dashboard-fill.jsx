import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_c1zacxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_c1zacxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:dashboard-fill"} {...others} />);
}

export default Component;
