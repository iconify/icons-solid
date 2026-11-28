import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o-tkjmy1q.css';
import '../../css/b/bqs_bew3a.css';
import '../../css/q/qg0bq2b6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o-tkjmy1q"/><path class="bqs_bew3a"/><path class="qg0bq2b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wifi-high-duo"} {...others} />);
}

export default Component;
