import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk_xv4fcw.css';
import '../../css/i/iyf1u4g7c.css';
import '../../css/a/aspzlbb5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mk_xv4fcw"/><path class="iyf1u4g7c"/><path class="aspzlbb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:glance"} {...others} />);
}

export default Component;
