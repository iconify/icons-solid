import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulz2_jrvn.css';
import '../../css/l/lkzr4lbat.css';
import '../../css/j/jt2wz2wem.css';
import '../../css/p/peock8bva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ulz2_jrvn"/><path class="lkzr4lbat"/><path class="jt2wz2wem"/><path class="peock8bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:statueofliberty"} {...others} />);
}

export default Component;
