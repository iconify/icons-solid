import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6pws_bay.css';
import '../../css/x/xj2ftdbyd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c6pws_bay"/><path clip-rule="evenodd" class="xj2ftdbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:vector-document-solid"} {...others} />);
}

export default Component;
