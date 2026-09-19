import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/um11cq07f.css';
import '../../css/e/e598ksbsp.css';
import '../../css/l/l6qkcxlox.css';
import '../../css/p/plcrscbzj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="um11cq07f"/><circle class="e598ksbsp"/><circle class="l6qkcxlox"/><circle class="plcrscbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:family"} {...others} />);
}

export default Component;
