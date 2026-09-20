import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r7x5le_dt.css';
import '../../css/n/n89723b9p.css';
import '../../css/h/h5p8ekb5t.css';
import '../../css/y/y1jy8bf4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r7x5le_dt"/><path class="n89723b9p"/><path class="h5p8ekb5t"/><path class="y1jy8bf4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:padlock-shield"} {...others} />);
}

export default Component;
