import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ac5-9om6a.css';
import '../../css/y/ywyki9b9z.css';
import '../../css/m/mirhr8m2n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ac5-9om6a"/><path class="ywyki9b9z"/><path class="mirhr8m2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scatter-alignment"} {...others} />);
}

export default Component;
