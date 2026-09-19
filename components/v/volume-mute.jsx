import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otlvh5bmr.css';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/atjk8mbde.css';
import '../../css/a/az2by_uqa.css';
import '../../css/s/sl82esoas.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwqNehbyC"><mask id="SVGdJVHOw9e" width="13" height="13" x="30" y="18" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="otlvh5bmr"/></mask><g class="v3_i3wktz"><g mask="url(#SVGdJVHOw9e)" class="atjk8mbde"><path class="az2by_uqa"/></g><path class="sl82esoas"/></g></mask></defs><path mask="url(#SVGwqNehbyC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:volume-mute"} {...others} />);
}

export default Component;
