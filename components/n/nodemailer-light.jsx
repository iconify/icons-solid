import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvhe4dbhm.css';
import '../../css/x/x0ej-4b7d.css';
import '../../css/j/j_dfhbbfa.css';
import '../../css/f/f8jb57zbv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mvhe4dbhm"/><path class="x0ej-4b7d"/><path class="j_dfhbbfa"/><path class="f8jb57zbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodemailer-light"} {...others} />);
}

export default Component;
