import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/plv6wabjd.css';
import '../../css/d/d_vxw9yeb.css';
import '../../css/h/hvm4n6b8w.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="plv6wabjd"/><path class="d_vxw9yeb"/><path class="hvm4n6b8w"/><circle class="shu3xdl9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:loader-pinwheel"} {...others} />);
}

export default Component;
