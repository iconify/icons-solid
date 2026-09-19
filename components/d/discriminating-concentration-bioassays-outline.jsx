import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l__rt35cm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="l__rt35cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:discriminating-concentration-bioassays-outline"} {...others} />);
}

export default Component;
