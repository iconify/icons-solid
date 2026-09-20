import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giqgrriek.css';
import '../../css/e/ec7vxwnky.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="giqgrriek"/><path class="ec7vxwnky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:refresh-dollar-1"} {...others} />);
}

export default Component;
