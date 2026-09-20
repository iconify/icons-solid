import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frr0t2b6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frr0t2b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-sharp-fill"} {...others} />);
}

export default Component;
