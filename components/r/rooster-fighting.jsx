import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3t-ovr2n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w3t-ovr2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rooster-fighting"} {...others} />);
}

export default Component;
