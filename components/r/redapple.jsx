import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdc6qib3k.css';
import '../../css/s/selcwmelg.css';
import '../../css/e/eyv9yyw_l.css';
import '../../css/f/f_zhl5bzc.css';
import '../../css/z/z7zfk7b5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sdc6qib3k"/><path class="selcwmelg"/><path class="eyv9yyw_l"/><path class="f_zhl5bzc"/><path class="z7zfk7b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:redapple"} {...others} />);
}

export default Component;
