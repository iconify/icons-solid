import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9trpfb6k.css';
import '../../css/f/fuaa95bjf.css';
import '../../css/b/b_ueihbie.css';
import '../../css/s/suahm1bcq.css';
import '../../css/g/gwyu_zr4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o9trpfb6k"/><path class="fuaa95bjf"/><path class="b_ueihbie"/><path class="suahm1bcq"/><path class="gwyu_zr4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cow"} {...others} />);
}

export default Component;
