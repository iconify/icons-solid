import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqw4tx2is.css';
import '../../css/w/wgp3imbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqw4tx2is"/><path clip-rule="evenodd" class="wgp3imbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:album-fill"} {...others} />);
}

export default Component;
