import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vazhz5-2p.css';
import '../../css/a/auct0ubxy.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vazhz5-2p"/><path class="auct0ubxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:money-location"} {...others} />);
}

export default Component;
