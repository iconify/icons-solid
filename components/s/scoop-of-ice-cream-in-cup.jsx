import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf446b7gd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wf446b7gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:scoop-of-ice-cream-in-cup"} {...others} />);
}

export default Component;
