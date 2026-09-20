import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hiw9j0bpi.css';
import '../../css/o/o5wrynbmv.css';
import '../../css/j/j7hj7ubnl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hiw9j0bpi"/><path class="o5wrynbmv"/><path class="j7hj7ubnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:affordable-and-clean-energy"} {...others} />);
}

export default Component;
