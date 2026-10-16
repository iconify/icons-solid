import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fj0fnx3qt.css';
import '../../css/l/liwmoc6yg.css';
import '../../css/n/nv1nfqb1r.css';

const viewBox = {"width":365.56,"height":245.56,"left":-2.78,"top":54.22};
const content = `<g class="n1mjunbsu"><path class="fj0fnx3qt"/><path class="liwmoc6yg"/><path class="nv1nfqb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cloudevents-dark"} {...others} />);
}

export default Component;
