import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/armb_ptpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="armb_ptpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-play-v"} {...others} />);
}

export default Component;
