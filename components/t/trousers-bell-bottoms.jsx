import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l9i-crb8u.css';
import '../../css/v/v752yjbjv.css';
import '../../css/y/yswqcbbmm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="l9i-crb8u"/><path class="v752yjbjv"/><path class="yswqcbbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trousers-bell-bottoms"} {...others} />);
}

export default Component;
