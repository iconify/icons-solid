import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xijfztbzl.css';
import '../../css/f/fu-ei7b7x.css';
import '../../css/o/ohcq6p68c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xijfztbzl"/><path class="fu-ei7b7x"/><path class="ohcq6p68c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:person-walking-48-bold"} {...others} />);
}

export default Component;
