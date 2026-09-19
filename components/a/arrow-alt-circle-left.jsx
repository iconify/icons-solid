import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn2crwbaz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nn2crwbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:arrow-alt-circle-left"} {...others} />);
}

export default Component;
