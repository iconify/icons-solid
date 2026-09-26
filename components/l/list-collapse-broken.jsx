import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ofbo3go0r.css';
import '../../css/z/z96w33bzg.css';
import '../../css/s/s8om3o5nq.css';
import '../../css/o/owrhvnb3b.css';
import '../../css/t/tv7mnccnu.css';
import '../../css/m/meafjacfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ofbo3go0r"/><path class="z96w33bzg"/><path class="s8om3o5nq"/><path class="owrhvnb3b"/><path class="tv7mnccnu"/><path class="meafjacfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-collapse-broken"} {...others} />);
}

export default Component;
