import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0wb4ed2k.css';
import '../../css/f/f_xu_qnbj.css';
import '../../css/i/ihxuxpo9x.css';
import '../../css/l/lxnvu-bcj.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/h/hro2jmbeu.css';
import '../../css/s/s5on3xm3v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p0wb4ed2k"/><path class="f_xu_qnbj"/><path class="ihxuxpo9x"/><path class="lxnvu-bcj"/><path class="aqsnv9bnd"/><path class="hro2jmbeu"/><path class="s5on3xm3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-x-20-bold"} {...others} />);
}

export default Component;
