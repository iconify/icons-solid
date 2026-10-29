import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5h6yubhn.css';
import '../../css/s/sq8kgxbws.css';
import '../../css/k/kk7sa4ekl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5h6yubhn wm-k"/><path class="sq8kgxbws wm-k"/><path class="kk7sa4ekl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:type"} {...others} />);
}

export default Component;
