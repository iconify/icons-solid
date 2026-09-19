import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/a/a7ebtkb2c.css';
import '../../css/p/pzexhzbmt.css';
import '../../css/f/fphtxumqm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="a7ebtkb2c"/><path class="pzexhzbmt"/><path class="fphtxumqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:photograph"} {...others} />);
}

export default Component;
