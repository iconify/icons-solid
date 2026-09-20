import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh7n6jp1r.css';
import '../../css/c/c3r_go6vi.css';
import '../../css/p/pf2zhnbir.css';
import '../../css/c/cly_fw55m.css';
import '../../css/w/w75jkzbxd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xh7n6jp1r"/><path class="c3r_go6vi"/><path class="pf2zhnbir"/><path class="cly_fw55m"/><path class="w75jkzbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gmail"} {...others} />);
}

export default Component;
