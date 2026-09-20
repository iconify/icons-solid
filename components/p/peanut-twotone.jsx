import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clg9ja.css';
import '../../css/y/ydovum.css';
import '../../css/q/qmefch.css';
import '../../css/t/tsch9o.css';
import '../../css/o/oah_lw.css';
import '../../css/a/a-wxtk.css';
import '../../css/f/fftggp.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="clg9ja ydovum"/><circle class="qmefch tsch9o ydovum"/><circle class="oah_lw tsch9o ydovum"/><circle class="a-wxtk tsch9o ydovum"/><circle class="fftggp tsch9o ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:peanut-twotone"} {...others} />);
}

export default Component;
