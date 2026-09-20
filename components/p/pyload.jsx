import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyx7_x3zo.css';
import '../../css/a/a6dsmibvs.css';
import '../../css/u/u9-lmsbri.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iyx7_x3zo"/><path class="a6dsmibvs"/><path class="u9-lmsbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pyload"} {...others} />);
}

export default Component;
