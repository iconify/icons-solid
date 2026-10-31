import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzeqlybma.css';
import '../../css/w/wyts8z33a.css';
import '../../css/g/gpd4gebnv.css';
import '../../css/c/cfcn3jbsa.css';

const viewBox = {"width":301,"height":177};
const content = `<g class="ft5dv1b6b"><path class="mzeqlybma"/><path class="wyts8z33a"/><path class="gpd4gebnv"/><path class="cfcn3jbsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cv"} {...others} />);
}

export default Component;
