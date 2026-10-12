import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teszfnbjc.css';
import '../../css/s/sktx1i8jz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="teszfnbjc"/><path class="sktx1i8jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bandage-48"} {...others} />);
}

export default Component;
