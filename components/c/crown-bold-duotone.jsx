import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeubc9bhd.css';
import '../../css/y/ytyjzqb0p.css';
import '../../css/e/exas8ac-h.css';
import '../../css/f/f1r159bxq.css';
import '../../css/u/u85c68klk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jeubc9bhd"/><path class="ytyjzqb0p"/><path class="exas8ac-h"/><path class="f1r159bxq"/><path class="u85c68klk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-bold-duotone"} {...others} />);
}

export default Component;
