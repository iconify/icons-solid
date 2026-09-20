import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z18id-9mf.css';
import '../../css/s/sqoxggbuw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z18id-9mf"/><path clip-rule="evenodd" class="sqoxggbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:peace-hand-flat"} {...others} />);
}

export default Component;
