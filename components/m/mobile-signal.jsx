import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr0e94jng.css';
import '../../css/u/uixwhfcch.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cr0e94jng"/><path class="uixwhfcch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:mobile-signal"} {...others} />);
}

export default Component;
