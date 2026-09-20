import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/n/n9lhdyzbg.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/e/evlewacnw.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><path clip-rule="evenodd" class="n9lhdyzbg"/><circle class="wcwvfmbxf"/><path clip-rule="evenodd" class="evlewacnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:registered"} {...others} />);
}

export default Component;
