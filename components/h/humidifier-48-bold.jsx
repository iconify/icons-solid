import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlyw1hblf.css';
import '../../css/v/v4j2tfucd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nlyw1hblf"/><path class="v4j2tfucd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidifier-48-bold"} {...others} />);
}

export default Component;
