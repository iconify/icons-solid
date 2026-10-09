import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebokfknlf.css';
import '../../css/k/k84i5l5cj.css';
import '../../css/d/dro-jbb6w.css';
import '../../css/r/rezyr22ot.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ebokfknlf"/><path class="k84i5l5cj"/><path class="dro-jbb6w"/><path class="rezyr22ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-rack-20-bold"} {...others} />);
}

export default Component;
