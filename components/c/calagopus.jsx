import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz1otrbai.css';
import '../../css/e/eka_oeb-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gz1otrbai"/><path class="eka_oeb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calagopus"} {...others} />);
}

export default Component;
