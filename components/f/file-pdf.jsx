import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv_dau1cf.css';
import '../../css/m/mwsfceayy.css';
import '../../css/v/vra1g0c1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dv_dau1cf wm-k"/><path class="mwsfceayy wm-k"/><path class="vra1g0c1t wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-pdf"} {...others} />);
}

export default Component;
