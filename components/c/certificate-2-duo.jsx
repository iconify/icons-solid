import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zigw0qw9c.css';
import '../../css/m/m2ekmwf7t.css';
import '../../css/b/bxl8cybbb.css';
import '../../css/j/je78ihd0c.css';
import '../../css/u/unu5cuidn.css';
import '../../css/l/lwe8yjb9p.css';
import '../../css/x/xcxrgjn6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zigw0qw9c"/><path class="m2ekmwf7t"/><path class="bxl8cybbb"/><path class="je78ihd0c"/><path class="unu5cuidn"/><path class="lwe8yjb9p"/><path class="xcxrgjn6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:certificate-2-duo"} {...others} />);
}

export default Component;
