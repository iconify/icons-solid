import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgrnoabib.css';
import '../../css/k/kjish1bii.css';
import '../../css/l/l826gn27u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tgrnoabib"/><path class="kjish1bii"/><path class="l826gn27u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-full-20-bold"} {...others} />);
}

export default Component;
