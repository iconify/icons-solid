import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfqg2gjhk.css';
import '../../css/z/zq-xd4b2s.css';
import '../../css/x/xv20pn3tn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dfqg2gjhk"/><path class="zq-xd4b2s"/><path class="xv20pn3tn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langfuse-dark"} {...others} />);
}

export default Component;
