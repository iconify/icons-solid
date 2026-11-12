import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cym2lacyw.css';
import '../../css/z/z-ykbvj8h.css';
import '../../css/u/u9t9_-bsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cym2lacyw"/><path class="z-ykbvj8h"/><path class="u9t9_-bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:silo-media-server-light"} {...others} />);
}

export default Component;
