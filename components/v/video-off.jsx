import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg16idnbd.css';
import '../../css/y/ykc7tw7rc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mg16idnbd"/><path class="ykc7tw7rc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:video-off"} {...others} />);
}

export default Component;
