import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-hxxlioz.css';
import '../../css/n/nd5zkmbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-hxxlioz"/><path clip-rule="evenodd" class="nd5zkmbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mastodon-24"} {...others} />);
}

export default Component;
