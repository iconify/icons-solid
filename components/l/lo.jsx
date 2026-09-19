import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/ksy1gcbdc.css';
import '../../css/m/m-eozcb5y.css';
import '../../css/w/w75vgjb0j.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsLo0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsLo0)"><path class="ksy1gcbdc"/><path class="m-eozcb5y"/><circle class="w75vgjb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lo"} {...others} />);
}

export default Component;
