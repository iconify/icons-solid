import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0eeupfys.css';
import '../../css/w/ws8a0lt4p.css';
import '../../css/s/sr-_ec-wh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u0eeupfys"/><path class="ws8a0lt4p"/><path class="sr-_ec-wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:document-attach-outline"} {...others} />);
}

export default Component;
