import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-8a31bcn.css';
import '../../css/g/grfufzbzd.css';
import '../../css/m/mnmuvybeq.css';
import '../../css/u/ubz6qzllx.css';
import '../../css/l/lneulqb-i.css';
import '../../css/t/tebe3hblw.css';
import '../../css/p/plzikndyt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d-8a31bcn"/><path clip-rule="evenodd" class="grfufzbzd"/><path clip-rule="evenodd" class="mnmuvybeq"/><path class="ubz6qzllx"/><path clip-rule="evenodd" class="lneulqb-i"/><path class="tebe3hblw"/><path clip-rule="evenodd" class="plzikndyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:briefcase"} {...others} />);
}

export default Component;
