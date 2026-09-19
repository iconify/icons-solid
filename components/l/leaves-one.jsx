import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o8v4jibvl.css';
import '../../css/v/va486t6yh.css';
import '../../css/f/f-gowhbok.css';
import '../../css/q/qdcg2ob_s.css';
import '../../css/e/ebehnraeu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="o8v4jibvl"/><path class="va486t6yh"/><path class="f-gowhbok"/><path class="qdcg2ob_s"/><path class="ebehnraeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:leaves-one"} {...others} />);
}

export default Component;
