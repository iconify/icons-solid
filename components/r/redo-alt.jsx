import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve2d88b1g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ve2d88b1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:redo-alt"} {...others} />);
}

export default Component;
