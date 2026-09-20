import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/loikblb0m.css';
import '../../css/d/d1bqygndn.css';
import '../../css/j/jt_ox3bji.css';
import '../../css/i/idq3n2bnw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="loikblb0m"/><path class="d1bqygndn"/><path class="jt_ox3bji"/><path class="idq3n2bnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:recycle-1"} {...others} />);
}

export default Component;
