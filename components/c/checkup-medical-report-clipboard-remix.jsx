import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6yng8mpd.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h6yng8mpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:checkup-medical-report-clipboard-remix"} {...others} />);
}

export default Component;
