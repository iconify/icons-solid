import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fe2q14dpp.css';
import '../../css/s/siy1ipb7s.css';
import '../../css/g/g85p_sbgd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="fe2q14dpp"/><path class="siy1ipb7s"/><path class="g85p_sbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:database"} {...others} />);
}

export default Component;
