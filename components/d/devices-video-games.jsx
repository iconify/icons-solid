import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvj_-bb6y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kvj_-bb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-video-games"} {...others} />);
}

export default Component;
