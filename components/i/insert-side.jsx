import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zikyyou9f.css';
import '../../css/g/gex58obqu.css';
import '../../css/t/tgdijsakh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zikyyou9f"/><path class="gex58obqu"/><path class="tgdijsakh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:insert-side"} {...others} />);
}

export default Component;
