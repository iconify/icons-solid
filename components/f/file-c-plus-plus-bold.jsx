import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_htoib7j.css';
import '../../css/n/n98d9ccwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_htoib7j"/><path class="n98d9ccwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:file-c-plus-plus-bold"} {...others} />);
}

export default Component;
