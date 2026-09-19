import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qw1f0bfkg.css';
import '../../css/o/ou1b4gbff.css';
import '../../css/b/br4dn_b2l.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsMizoram0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsMizoram0)"><path class="qw1f0bfkg"/><path class="ou1b4gbff"/><circle class="br4dn_b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:mizoram"} {...others} />);
}

export default Component;
