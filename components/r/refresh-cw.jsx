import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/wd6ts5fwr.css';
import '../../css/f/fkwn_s3xi.css';
import '../../css/m/mbwr7j0ds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="wd6ts5fwr"/><path class="fkwn_s3xi"/><path class="mbwr7j0ds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:refresh-cw"} {...others} />);
}

export default Component;
