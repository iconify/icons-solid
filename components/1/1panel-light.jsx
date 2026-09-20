import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soai4mb4s.css';
import '../../css/z/zyhrf5vhp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="soai4mb4s"/><path class="zyhrf5vhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:1panel-light"} {...others} />);
}

export default Component;
