import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwkgdwb5n.css';
import '../../css/a/azrz_n2gu.css';
import '../../css/a/abitvh4up.css';
import '../../css/p/pufsi6zza.css';

const viewBox = {"width":726,"height":726};
const content = `<g clip-path="url(#SVGoMqm6bNt)"><path class="nwkgdwb5n"/><path class="azrz_n2gu"/><path class="abitvh4up"/></g><defs><clipPath id="SVGoMqm6bNt"><path class="pufsi6zza"/></clipPath></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:replicate-light"} {...others} />);
}

export default Component;
