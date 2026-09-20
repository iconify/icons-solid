import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h064x8_tu.css';
import '../../css/w/wcbinzmqf.css';
import '../../css/u/ujw83zbve.css';
import '../../css/d/d9qq8_b5w.css';
import '../../css/d/d3h35wbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h064x8_tu"/><path class="wcbinzmqf"/><path class="ujw83zbve"/><path class="d9qq8_b5w"/><path class="d3h35wbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tea-pot"} {...others} />);
}

export default Component;
