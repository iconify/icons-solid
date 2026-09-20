import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bvy5pzboo.css';
import '../../css/y/yi-4oobnu.css';
import '../../css/c/cpeahtb3i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bvy5pzboo"/><path class="yi-4oobnu"/><path class="cpeahtb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:orientation-landscape"} {...others} />);
}

export default Component;
