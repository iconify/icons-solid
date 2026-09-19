import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzhlp3bxm.css';
import '../../css/w/wgaj_ib1j.css';
import '../../css/s/s07htpbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzhlp3bxm"/><path class="wgaj_ib1j"/><path class="s07htpbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bullseye-filled"} {...others} />);
}

export default Component;
