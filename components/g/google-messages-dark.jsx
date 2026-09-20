import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nim0ecb_g.css';
import '../../css/m/m2lf37b_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nim0ecb_g"/><path class="m2lf37b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-messages-dark"} {...others} />);
}

export default Component;
