import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7vmrehhn.css';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qw6_-eb8r.css';
import '../../css/u/u0_yhnd_o.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/z2bhjib7e.css';
import '../../css/j/jubc6kbdo.css';
import '../../css/v/vjw5p5z9i.css';

const viewBox = {"width":301,"height":201};
const content = `<defs><path id="SVGkM6JsbQL" class="r7vmrehhn"/></defs><g class="bi12bsetm"><path class="qw6_-eb8r"/><path class="u0_yhnd_o"/><mask id="SVGrZesHcAu" class="n1mjunbsu"><use href="#SVGkM6JsbQL"/></mask><path mask="url(#SVGrZesHcAu)" class="z2bhjib7e"/><path mask="url(#SVGrZesHcAu)" class="jubc6kbdo"/><path class="vjw5p5z9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:kn"} {...others} />);
}

export default Component;
