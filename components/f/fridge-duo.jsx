import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j71i4dbqj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/soc4v_wxl.css';
import '../../css/c/cbvzglb0e.css';
import '../../css/g/g688x0dlt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j71i4dbqj secondary"/><g class="dt0cm9dhy primary"><path class="soc4v_wxl"/><path class="cbvzglb0e"/><path class="g688x0dlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fridge-duo"} {...others} />);
}

export default Component;
