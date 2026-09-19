import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dvc87tbis.css';
import '../../css/s/sucfzibxq.css';
import '../../css/u/utfeskb0a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dvc87tbis"/><path class="sucfzibxq"/><path class="utfeskb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:holy-sword"} {...others} />);
}

export default Component;
