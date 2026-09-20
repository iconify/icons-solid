import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqinw03so.css';
import '../../css/j/j6jd71l-f.css';
import '../../css/o/o-hp121ew.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cqinw03so"/><path class="j6jd71l-f"/><path clip-rule="evenodd" class="o-hp121ew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:startup-flat"} {...others} />);
}

export default Component;
