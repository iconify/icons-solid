import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5k4mmokm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u5k4mmokm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cam-video-light"} {...others} />);
}

export default Component;
