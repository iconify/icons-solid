import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7g4iqb1i.css';
import '../../css/m/mwlvaabdt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b7g4iqb1i"/><path class="mwlvaabdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cast-20-bold"} {...others} />);
}

export default Component;
