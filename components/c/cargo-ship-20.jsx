import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hryueux2x.css';
import '../../css/g/gmupky7wc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hryueux2x"/><path class="gmupky7wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-ship-20"} {...others} />);
}

export default Component;
