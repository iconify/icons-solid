import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw834mbpj.css';
import '../../css/t/tbo0rsbbk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bw834mbpj"/><path class="tbo0rsbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:document-text-sharp"} {...others} />);
}

export default Component;
