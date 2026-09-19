import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcvle1blf.css';
import '../../css/n/n-xbr3p_n.css';
import '../../css/k/kymfg3bmi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6kMRMcjV"><g class="ft5dv1b6b"><rect class="tcvle1blf"/><path class="n-xbr3p_n"/><rect transform="rotate(90 15 29)" class="kymfg3bmi"/></g></mask></defs><path mask="url(#SVG6kMRMcjV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:painted-screen"} {...others} />);
}

export default Component;
