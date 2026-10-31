import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/q/qzi6x3eeu.css';
import '../../css/b/bqwt9iilj.css';
import '../../css/f/ftvkakb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="qzi6x3eeu wm-shadow"/><path class="bqwt9iilj"/><path class="ftvkakb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:target"} {...others} />);
}

export default Component;
