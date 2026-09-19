import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/umyka6q_v.css';
import '../../css/p/p1a8k8bml.css';
import '../../css/h/how2zebhe.css';
import '../../css/o/obw0n8bwf.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="umyka6q_v"/><path class="p1a8k8bml"/><path class="how2zebhe"/><path class="obw0n8bwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:va"} {...others} />);
}

export default Component;
