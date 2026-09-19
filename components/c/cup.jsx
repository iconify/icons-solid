import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yw5nrdgml.css';
import '../../css/d/dyq45qxmy.css';
import '../../css/j/jnskwr84b.css';
import '../../css/r/rfia81eko.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVGFdLm0cxj"><g class="rohhhzb0l"><path class="yw5nrdgml"/><path class="dyq45qxmy"/><path class="jnskwr84b"/><path class="rfia81eko"/></g></mask></defs><path mask="url(#SVGFdLm0cxj)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cup"} {...others} />);
}

export default Component;
