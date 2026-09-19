import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipkl84b6w.css';
import '../../css/o/odbzuac1h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ipkl84b6w"/><path class="odbzuac1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:globe"} {...others} />);
}

export default Component;
