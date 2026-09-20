import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/c/cylh-mblg.css';
import '../../css/o/oz_ktlo_m.css';
import '../../css/m/mjmf0tagp.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="cylh-mblg"/><path class="oz_ktlo_m"/><path class="mjmf0tagp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:muslim"} {...others} />);
}

export default Component;
