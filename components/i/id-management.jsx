import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne7p8x31a.css';
import '../../css/f/fohdu3hry.css';
import '../../css/f/fp6ugybfx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ne7p8x31a"/><path class="fohdu3hry"/><path class="fp6ugybfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:id-management"} {...others} />);
}

export default Component;
