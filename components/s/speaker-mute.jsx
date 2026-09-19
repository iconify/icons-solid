import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q97m5m7xg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q97m5m7xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:speaker-mute"} {...others} />);
}

export default Component;
