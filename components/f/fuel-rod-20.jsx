import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhslc-sys.css';
import '../../css/b/be_b20boh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rhslc-sys"/><path class="be_b20boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-rod-20"} {...others} />);
}

export default Component;
