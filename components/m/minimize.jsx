import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyj-7ezxh.css';
import '../../css/q/q1n0ufkxq.css';
import '../../css/n/nofshwblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vyj-7ezxh wm-shadow"/><path class="q1n0ufkxq wm-k"/><path class="nofshwblh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:minimize"} {...others} />);
}

export default Component;
