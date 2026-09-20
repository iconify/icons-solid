import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckmxwib0i.css';
import '../../css/t/tzxadxgno.css';
import '../../css/e/e8ygrwbil.css';
import '../../css/q/q75jjebbk.css';
import '../../css/z/zz-ow3bzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ckmxwib0i"/><path class="tzxadxgno"/><path class="e8ygrwbil"/><circle class="q75jjebbk"/><path class="zz-ow3bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posteria"} {...others} />);
}

export default Component;
