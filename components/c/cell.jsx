import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtdqfzb6i.css';
import '../../css/f/fr_n_ft5z.css';
import '../../css/m/muukvoply.css';
import '../../css/z/zpftctuds.css';
import '../../css/j/jpqmf7b7b.css';
import '../../css/n/n6pj2qbmf.css';
import '../../css/s/sm72j3byu.css';
import '../../css/f/f9l3qbi3c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qtdqfzb6i"><path class="fr_n_ft5z"/><path class="muukvoply"/><path clip-rule="evenodd" class="zpftctuds"/><path class="jpqmf7b7b"/><path class="n6pj2qbmf"/><path class="sm72j3byu"/><path class="f9l3qbi3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cell"} {...others} />);
}

export default Component;
