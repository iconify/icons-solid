import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmwpo3s4r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dmwpo3s4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:video-alt"} {...others} />);
}

export default Component;
