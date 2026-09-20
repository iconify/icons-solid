import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptc2z0uva.css';
import '../../css/b/bol26ibfk.css';
import '../../css/n/n_sbz4wjt.css';
import '../../css/f/fiyl3gb2r.css';
import '../../css/n/nm891obtz.css';
import '../../css/g/glxiuqszz.css';
import '../../css/j/jaeoktbas.css';
import '../../css/y/y4tk7yi3p.css';
import '../../css/d/dvfrid00h.css';
import '../../css/t/tp14w0bof.css';
import '../../css/t/tq9sjxhuz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ptc2z0uva"/><path class="bol26ibfk"/><path class="n_sbz4wjt"/><path class="fiyl3gb2r"/><path class="nm891obtz"/><path class="glxiuqszz"/><path class="jaeoktbas"/><path class="y4tk7yi3p"/><path class="dvfrid00h"/><path class="tp14w0bof"/><path class="tq9sjxhuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:lemon"} {...others} />);
}

export default Component;
