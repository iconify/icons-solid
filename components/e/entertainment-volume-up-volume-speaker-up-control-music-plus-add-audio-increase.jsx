import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_xknqb-h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="d_xknqb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-volume-up-volume-speaker-up-control-music-plus-add-audio-increase"} {...others} />);
}

export default Component;
