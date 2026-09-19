import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k89d1bbde.css';
import '../../css/i/innr1n4sq.css';
import '../../css/q/qyo57ccgn.css';
import '../../css/v/ve4j__bhu.css';
import '../../css/e/eoljevgin.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k89d1bbde"/><path class="innr1n4sq"/><path class="qyo57ccgn"/><path class="ve4j__bhu"/><path class="eoljevgin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sc-1x1"} {...others} />);
}

export default Component;
