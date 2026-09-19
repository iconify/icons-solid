import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg4w-xbmv.css';

const viewBox = {"width":440,"height":512};
const content = `<path class="wg4w-xbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:virtualbox"} {...others} />);
}

export default Component;
