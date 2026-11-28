import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svx0lxokl.css';
import '../../css/d/dgfy8elcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary svx0lxokl"/><path class="dgfy8elcu primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-big-right-duo"} {...others} />);
}

export default Component;
