import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqi-7acky.css';
import '../../css/b/bw834mbpj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uqi-7acky"/><path class="bw834mbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:document-sharp"} {...others} />);
}

export default Component;
