import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_es2wzdn.css';
import '../../css/j/jbm7ubcxn.css';
import '../../css/b/b-waoerrw.css';
import '../../css/c/ck6sdqbkp.css';
import '../../css/n/n44qfl4eh.css';
import '../../css/s/se506vbgv.css';
import '../../css/n/n93g78bsq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k_es2wzdn"/><path class="jbm7ubcxn"/><circle class="b-waoerrw"/><path class="ck6sdqbkp"/><path class="n44qfl4eh"/><circle class="se506vbgv"/><path class="n93g78bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:panda"} {...others} />);
}

export default Component;
