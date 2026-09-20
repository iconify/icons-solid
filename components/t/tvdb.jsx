import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shtvigbaj.css';
import '../../css/t/td9yfnbnw.css';
import '../../css/q/ql028qbli.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="shtvigbaj"/><path class="td9yfnbnw"/><path class="ql028qbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tvdb"} {...others} />);
}

export default Component;
