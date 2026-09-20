import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jork_dbtm.css';
import '../../css/w/wsj8ofa5i.css';
import '../../css/w/w-kmabubr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jork_dbtm"/><path class="wsj8ofa5i"/><path class="w-kmabubr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:technology-device-wearable-smart-watch-circle-app-2-bold"} {...others} />);
}

export default Component;
