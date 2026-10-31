import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fpw7l9b3n.css';
import '../../css/m/mu7ekohwc.css';
import '../../css/k/kzsarmpqw.css';
import '../../css/f/f1os_4dcm.css';
import '../../css/t/tkya-sj7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fpw7l9b3n wm-shadow"/><path class="mu7ekohwc wm-shadow"/><path class="kzsarmpqw"/><path class="f1os_4dcm"/><path class="tkya-sj7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wreath"} {...others} />);
}

export default Component;
