import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3oz6trwf.css';
import '../../css/d/dmz5tfbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3oz6trwf"/><path class="dmz5tfbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:syringe-bold"} {...others} />);
}

export default Component;
