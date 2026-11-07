import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gycevabte.css';
import '../../css/w/wo44ytbsn.css';
import '../../css/o/o4befubdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="gycevabte"/><path class="wo44ytbsn"/></g><path class="o4befubdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scooter-bold-duotone"} {...others} />);
}

export default Component;
