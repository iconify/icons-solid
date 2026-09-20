import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksr8kl3ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ksr8kl3ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:reactbootstrap"} {...others} />);
}

export default Component;
