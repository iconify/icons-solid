import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/on6yy0byj.css';
import '../../css/m/md286fbip.css';
import '../../css/f/fe4paj2jh.css';
import '../../css/b/bt3k7sqta.css';
import '../../css/u/unmcvlw0v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="on6yy0byj"/><g class="md286fbip"><path class="fe4paj2jh"/><path class="bt3k7sqta"/><path class="unmcvlw0v"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zen"} {...others} />);
}

export default Component;
