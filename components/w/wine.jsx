import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm_sfu09j.css';
import '../../css/t/ti95e2suf.css';
import '../../css/r/rkysbabwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bm_sfu09j"/><path class="ti95e2suf"/><path class="rkysbabwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wine"} {...others} />);
}

export default Component;
