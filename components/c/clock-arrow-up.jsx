import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rlyqeqb5c.css';
import '../../css/w/wtl4ombtk.css';
import '../../css/i/iz5phjbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rlyqeqb5c"/><path class="wtl4ombtk"/><path class="iz5phjbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-up"} {...others} />);
}

export default Component;
