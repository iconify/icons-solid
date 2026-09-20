import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/n-cck-b2m.css';
import '../../css/o/oh-afpbaq.css';
import '../../css/s/s4_1x1qva.css';
import '../../css/n/n73pe7car.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="n-cck-b2m"/><path class="oh-afpbaq"/><path class="s4_1x1qva"/><path class="n73pe7car"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:investing-and-banking"} {...others} />);
}

export default Component;
