import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvk456bgx.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="zvk456bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:youtube-play"} {...others} />);
}

export default Component;
