import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9kik4bpu.css';
import '../../css/y/ydyhasxxq.css';
import '../../css/g/gd4ik5bou.css';
import '../../css/g/g7kjrwjeo.css';
import '../../css/y/y_l88kifd.css';
import '../../css/f/fkbzw9bvx.css';
import '../../css/n/n9uj42day.css';
import '../../css/u/uke6qytrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9kik4bpu wm-shadow"/><path class="wm-k ydyhasxxq"/><path class="gd4ik5bou wm-k"/><path class="g7kjrwjeo wm-k"/><path class="wm-k y_l88kifd"/><path class="fkbzw9bvx wm-shine"/><path class="n9uj42day wm-k"/><path class="uke6qytrt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:archive-restore"} {...others} />);
}

export default Component;
