import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/adm6lkq3f.css';
import '../../css/b/buqrw97ea.css';
import '../../css/x/xh79rrbaw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="adm6lkq3f"/><path class="buqrw97ea"/><path class="xh79rrbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:figma-reset-instance"} {...others} />);
}

export default Component;
