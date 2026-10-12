import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spkac_bdx.css';
import '../../css/u/ups32ubwz.css';
import '../../css/r/r33ozbbfw.css';
import '../../css/a/asw291bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="spkac_bdx"/><path class="ups32ubwz"/><rect class="r33ozbbfw"/><path class="asw291bbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-lock"} {...others} />);
}

export default Component;
