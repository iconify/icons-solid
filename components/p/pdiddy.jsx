import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2uz6p22g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c2uz6p22g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:pdiddy"} {...others} />);
}

export default Component;
