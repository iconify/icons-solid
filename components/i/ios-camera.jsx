import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrcd7qbgp.css';
import '../../css/b/b8kj2gpmh.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="mrcd7qbgp"/><path class="b8kj2gpmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-camera"} {...others} />);
}

export default Component;
