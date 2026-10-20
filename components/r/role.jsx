import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/w/wugzj3b3t.css';
import '../../css/w/wf_bemczq.css';
import '../../css/d/d5faoobga.css';
import '../../css/p/puudswb7e.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><g transform="translate(-.865 -1.034)"><ellipse class="wugzj3b3t"/><path class="wf_bemczq"/><path class="d5faoobga"/><path class="puudswb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:role"} {...others} />);
}

export default Component;
