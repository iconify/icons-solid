import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/p/p51w8qvts.css';
import '../../css/c/cahla8b5c.css';
import '../../css/s/smj0d4bpt.css';
import '../../css/c/cg07vff7x.css';
import '../../css/a/adat9lbta.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="p51w8qvts"/><path class="cahla8b5c"/><path class="smj0d4bpt"/><path class="cg07vff7x"/><path class="adat9lbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:daemonset"} {...others} />);
}

export default Component;
