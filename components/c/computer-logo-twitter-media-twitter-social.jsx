import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bic91mcwn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bic91mcwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-logo-twitter-media-twitter-social"} {...others} />);
}

export default Component;
