import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhfnc2dzw.css';
import '../../css/c/ccz24ggpe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zhfnc2dzw"/><path class="ccz24ggpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:myheats-dark"} {...others} />);
}

export default Component;
