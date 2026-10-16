import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xak_phb-k.css';
import '../../css/w/w7pe5sbbm.css';
import '../../css/r/r1ulr9b3o.css';
import '../../css/d/d7u_dlrgo.css';
import '../../css/s/sco082b7w.css';

const viewBox = {"width":366.08,"height":298.83,"left":-3.29,"top":29.96};
const content = `<path class="xak_phb-k"/><path class="w7pe5sbbm"/><path class="r1ulr9b3o"/><path class="d7u_dlrgo"/><path class="sco082b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:in-toto-light"} {...others} />);
}

export default Component;
