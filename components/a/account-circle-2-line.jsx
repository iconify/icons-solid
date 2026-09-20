import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft6fc1ajc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft6fc1ajc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:account-circle-2-line"} {...others} />);
}

export default Component;
