import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9cwwxbhw.css';
import '../../css/z/zf7k3pl9o.css';
import '../../css/b/b1645np_z.css';
import '../../css/m/m_ps-sb_m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y9cwwxbhw"/><path class="zf7k3pl9o"/><path class="b1645np_z"/><path class="m_ps-sb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adventurelog"} {...others} />);
}

export default Component;
