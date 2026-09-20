import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sj5xh6bdt.css';
import '../../css/n/nx3yiwbvs.css';
import '../../css/p/pwfngbbia.css';
import '../../css/x/x2n1igbep.css';
import '../../css/x/x92lf3goo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sj5xh6bdt"/><path clip-rule="evenodd" class="nx3yiwbvs"/><path class="pwfngbbia"/><path class="x2n1igbep"/><path class="x92lf3goo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:radio"} {...others} />);
}

export default Component;
