import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qht09-59q.css';
import '../../css/a/ana62cbyy.css';
import '../../css/q/q4oxf2bji.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qht09-59q"/><path class="ana62cbyy"/><path class="q4oxf2bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:waningbibbousmoon"} {...others} />);
}

export default Component;
