import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoyhz65ds.css';
import '../../css/h/hnns8ybzm.css';
import '../../css/k/kcecztbwr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uoyhz65ds"/><path class="hnns8ybzm"/><path class="kcecztbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hand-held"} {...others} />);
}

export default Component;
