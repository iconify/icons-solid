import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdfbblb0o.css';
import '../../css/l/l78-x2byw.css';
import '../../css/e/eghcg3_xc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fdfbblb0o"/><path class="l78-x2byw"/><path class="eghcg3_xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:index"} {...others} />);
}

export default Component;
