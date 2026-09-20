import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k65qmwbkg.css';
import '../../css/o/o_zhbhb3w.css';
import '../../css/x/xcnnwn-ti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k65qmwbkg"/><path class="o_zhbhb3w"/><path class="xcnnwn-ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fragile"} {...others} />);
}

export default Component;
