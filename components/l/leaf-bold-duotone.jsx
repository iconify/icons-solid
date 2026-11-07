import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt9f2zz1g.css';
import '../../css/r/ry4h5fb7w.css';
import '../../css/i/iq4y8qctn.css';
import '../../css/k/kquyjabxs.css';
import '../../css/p/pczff7gss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nt9f2zz1g"/><path class="ry4h5fb7w"/><path class="iq4y8qctn"/><path class="kquyjabxs"/><path class="pczff7gss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:leaf-bold-duotone"} {...others} />);
}

export default Component;
