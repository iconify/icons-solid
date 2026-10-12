import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl6j6835z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bl6j6835z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:voicemail-20"} {...others} />);
}

export default Component;
