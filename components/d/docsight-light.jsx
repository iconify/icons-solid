import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvtfe-rmr.css';
import '../../css/a/a746rccmm.css';
import '../../css/h/hsflg_a-k.css';
import '../../css/e/euha5s-mc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yvtfe-rmr"/><path class="a746rccmm"/><path class="hsflg_a-k"/><circle class="euha5s-mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docsight-light"} {...others} />);
}

export default Component;
