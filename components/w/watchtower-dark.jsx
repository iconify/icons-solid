import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud2q-obza.css';
import '../../css/z/zb7vgmb5u.css';
import '../../css/u/uywxzgm7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ud2q-obza"/><path class="zb7vgmb5u"/><path class="uywxzgm7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchtower-dark"} {...others} />);
}

export default Component;
