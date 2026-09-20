import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1_mtyflw.css';
import '../../css/h/h_8y3cbtj.css';
import '../../css/p/pqxth-b_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y1_mtyflw"/><path class="h_8y3cbtj"/><path class="pqxth-b_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:arrow-left-right-circle"} {...others} />);
}

export default Component;
