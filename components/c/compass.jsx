import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/ziuixobqp.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n46l4h2nc.css';
import '../../css/a/a6z4ynb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGu1g5bcyb" class="n1mjunbsu"><path class="ziuixobqp"/></mask><g class="h01tyzbfu"><path mask="url(#SVGu1g5bcyb)" class="n46l4h2nc"/><circle class="a6z4ynb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass"} {...others} />);
}

export default Component;
