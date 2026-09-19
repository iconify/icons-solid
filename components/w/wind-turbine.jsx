import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3-fdubsi.css';
import '../../css/q/q1rpp7bgb.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGf8Qy0dXC"><g class="ft5dv1b6b"><path class="e3-fdubsi"/><path class="q1rpp7bgb"/><circle class="qznx_nb7p"/></g></mask></defs><path mask="url(#SVGf8Qy0dXC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:wind-turbine"} {...others} />);
}

export default Component;
