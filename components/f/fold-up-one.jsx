import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hzvhqgbpd.css';
import '../../css/l/l-kpgobce.css';
import '../../css/v/v76i5_byj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hzvhqgbpd"/><path class="l-kpgobce"/><path class="v76i5_byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fold-up-one"} {...others} />);
}

export default Component;
