import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft_j2-bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft_j2-bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:battery-charging"} {...others} />);
}

export default Component;
