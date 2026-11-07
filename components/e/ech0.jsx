import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6iw_7bgc.css';
import '../../css/t/t2qw1ybvw.css';
import '../../css/o/o394wrbot.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="u6iw_7bgc"/><circle class="t2qw1ybvw"/><path class="o394wrbot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ech0"} {...others} />);
}

export default Component;
