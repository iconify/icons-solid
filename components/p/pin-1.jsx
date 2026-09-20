import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gi18p3fts.css';
import '../../css/h/h51fekbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gi18p3fts"/><path class="h51fekbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pin-1"} {...others} />);
}

export default Component;
