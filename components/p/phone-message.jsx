import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q30h5qb3d.css';
import '../../css/o/ol_7mzb3t.css';
import '../../css/v/vh3e6ytdh.css';
import '../../css/k/krgur6b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q30h5qb3d"/><path class="ol_7mzb3t"/><path class="vh3e6ytdh"/><path class="krgur6b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-message"} {...others} />);
}

export default Component;
