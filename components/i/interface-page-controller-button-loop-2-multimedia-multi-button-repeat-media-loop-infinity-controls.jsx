import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wouy48bnn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wouy48bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-button-loop-2-multimedia-multi-button-repeat-media-loop-infinity-controls"} {...others} />);
}

export default Component;
