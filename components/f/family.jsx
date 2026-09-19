import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/um11cq07f.css';
import '../../css/p/pltcxobma.css';
import '../../css/b/bdq47285o.css';
import '../../css/b/bpvfad8uc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="um11cq07f"/><circle class="pltcxobma"/><circle class="bdq47285o"/><circle class="bpvfad8uc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:family"} {...others} />);
}

export default Component;
