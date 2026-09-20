import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu_w61bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tu_w61bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:sync-exclamation"} {...others} />);
}

export default Component;
