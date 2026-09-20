import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddlerbc9s.css';
import '../../css/w/w158vz8lp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ddlerbc9s"/><path class="w158vz8lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:plan"} {...others} />);
}

export default Component;
