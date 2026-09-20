import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5py7xbsd.css';
import '../../css/w/wd2bk8qje.css';
import '../../css/e/ey4nidbgq.css';
import '../../css/x/x3sba3w-q.css';
import '../../css/p/pquylo05r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u5py7xbsd"/><path class="wd2bk8qje"/><path class="ey4nidbgq"/><path class="x3sba3w-q"/><path class="pquylo05r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scatola-magica-light"} {...others} />);
}

export default Component;
