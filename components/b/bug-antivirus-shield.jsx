import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7mzlybtr.css';
import '../../css/c/cbdahri2f.css';
import '../../css/w/wesd7-baw.css';
import '../../css/a/a76g1wblv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f7mzlybtr"/><path class="cbdahri2f"/><path class="wesd7-baw"/><path class="a76g1wblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug-antivirus-shield"} {...others} />);
}

export default Component;
