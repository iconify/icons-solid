import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ned_-5brk.css';
import '../../css/q/qgjfm8e-t.css';
import '../../css/a/ak69q9oph.css';
import '../../css/m/m6azxg1iw.css';
import '../../css/n/n0vigjb_n.css';
import '../../css/g/gh6q1ee2f.css';

const viewBox = {"width":64,"height":64,"top":-1};
const content = `<path class="ned_-5brk"/><path class="qgjfm8e-t"/><path class="ak69q9oph"/><path class="m6azxg1iw"/><path class="n0vigjb_n"/><path class="gh6q1ee2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:randevum"} {...others} />);
}

export default Component;
