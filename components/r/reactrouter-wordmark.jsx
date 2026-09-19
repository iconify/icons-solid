import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v40o2_bot.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v40o2_bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:reactrouter-wordmark"} {...others} />);
}

export default Component;
