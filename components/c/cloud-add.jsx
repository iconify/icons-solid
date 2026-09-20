import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6pp--cit.css';
import '../../css/p/peh4njbhx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a6pp--cit"/><path class="peh4njbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-add"} {...others} />);
}

export default Component;
