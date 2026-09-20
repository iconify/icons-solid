import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2rn-bbbi.css';
import '../../css/o/o87ze1dox.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l2rn-bbbi"/><path class="o87ze1dox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:flu-mask"} {...others} />);
}

export default Component;
