import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfj_ec0cs.css';
import '../../css/j/jz2nnzb1g.css';
import '../../css/p/puzcifo1g.css';
import '../../css/z/zzrsoebtg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sfj_ec0cs"/><path class="jz2nnzb1g"/><path class="puzcifo1g"/><path class="zzrsoebtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-loop"} {...others} />);
}

export default Component;
