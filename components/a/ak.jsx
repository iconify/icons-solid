import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fu68vabvx.css';
import '../../css/m/mwx-_uq8u.css';
import '../../css/n/noo2m29ib.css';
import '../../css/p/pdarsunqf.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsAk0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsAk0)"><path class="fu68vabvx"/><path class="mwx-_uq8u"/><path class="noo2m29ib"/><path class="pdarsunqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ak"} {...others} />);
}

export default Component;
