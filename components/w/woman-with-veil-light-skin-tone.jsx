import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0q9rw0xn.css';
import '../../css/e/eztqw9biy.css';
import '../../css/h/h_ao0g9mm.css';
import '../../css/s/s7odcls6j.css';
import '../../css/f/fbruixhzf.css';
import '../../css/p/pq1scobnl.css';
import '../../css/y/yn_97dutf.css';
import '../../css/f/f1p8lsbgd.css';
import '../../css/h/htuxrkbee.css';
import '../../css/n/n0zgbxbhd.css';
import '../../css/l/lltl7zsib.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a0q9rw0xn"/><g class="eztqw9biy"><circle class="h_ao0g9mm"/><path class="s7odcls6j"/></g><path class="fbruixhzf"/><path class="pq1scobnl"/><path class="yn_97dutf"/><path class="f1p8lsbgd"/><path class="htuxrkbee"/><path class="n0zgbxbhd"/><path class="lltl7zsib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-with-veil-light-skin-tone"} {...others} />);
}

export default Component;
