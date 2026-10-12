import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg0cyhbjt.css';
import '../../css/h/h3yshrbmu.css';
import '../../css/m/mt3wvccip.css';
import '../../css/h/h9onl-gti.css';
import '../../css/m/m68u4abjj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eg0cyhbjt"/><path class="h3yshrbmu"/><path class="mt3wvccip"/><path class="h9onl-gti"/><path class="m68u4abjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-globe-20"} {...others} />);
}

export default Component;
