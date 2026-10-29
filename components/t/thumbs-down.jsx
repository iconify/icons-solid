import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kio4hsg7t.css';
import '../../css/n/nljnanbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kio4hsg7t wm-a"/><path class="nljnanbsb wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:thumbs-down"} {...others} />);
}

export default Component;
