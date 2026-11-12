import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu3j08bot.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xu3j08bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spinnerr-dark"} {...others} />);
}

export default Component;
