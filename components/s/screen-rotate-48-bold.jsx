import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi8o1qbbo.css';
import '../../css/o/o7xo-pl1v.css';
import '../../css/z/z-qwk0bfp.css';
import '../../css/p/phykisuce.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oi8o1qbbo"/><path class="o7xo-pl1v"/><path class="z-qwk0bfp"/><path class="phykisuce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-rotate-48-bold"} {...others} />);
}

export default Component;
