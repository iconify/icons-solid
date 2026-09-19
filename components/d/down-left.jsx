import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xizzrhbul.css';
import '../../css/h/h5p4sr09b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xizzrhbul"/><path class="h5p4sr09b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:down-left"} {...others} />);
}

export default Component;
