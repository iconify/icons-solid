import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5tpa0s6m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o5tpa0s6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:patreon-solid"} {...others} />);
}

export default Component;
