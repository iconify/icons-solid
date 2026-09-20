import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/i/iuedzys_f.css';
import '../../css/u/ua-65ikbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="iuedzys_f"/><path class="ua-65ikbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:shield-police-line"} {...others} />);
}

export default Component;
