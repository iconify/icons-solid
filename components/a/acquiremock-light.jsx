import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxe3iy_vo.css';
import '../../css/l/l-e08r57d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qxe3iy_vo"/><path class="l-e08r57d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:acquiremock-light"} {...others} />);
}

export default Component;
