import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g3hq8ccro.css';
import '../../css/h/hw0a4dbvi.css';
import '../../css/j/jqrxswsfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g3hq8ccro"/><path class="hw0a4dbvi"/><path class="jqrxswsfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sizing"} {...others} />);
}

export default Component;
