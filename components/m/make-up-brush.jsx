import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4m947bzn.css';
import '../../css/e/epzn6nbzp.css';
import '../../css/n/n-z9xqvfj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t4m947bzn"/><path class="epzn6nbzp"/><path class="n-z9xqvfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:make-up-brush"} {...others} />);
}

export default Component;
