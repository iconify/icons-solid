import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg414d5aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg414d5aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:slash-commands-2"} {...others} />);
}

export default Component;
