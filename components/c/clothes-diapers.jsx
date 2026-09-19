import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jr6yjfblw.css';
import '../../css/p/pysnh8b9c.css';
import '../../css/f/feacjibdb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jr6yjfblw"/><path class="pysnh8b9c"/><path class="feacjibdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-diapers"} {...others} />);
}

export default Component;
