import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9eau0bon.css';
import '../../css/p/pg-5e7bwl.css';
import '../../css/r/rppieib9f.css';
import '../../css/q/q7rnzcc6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k9eau0bon"/><path class="pg-5e7bwl"/><path class="rppieib9f"/><path class="q7rnzcc6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:technology-device-wearable-smart-watch-circle-app-1-bold"} {...others} />);
}

export default Component;
