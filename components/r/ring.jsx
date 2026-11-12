import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yro947b0c.css';
import '../../css/l/lhh1z-yfw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yro947b0c"/><circle class="lhh1z-yfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ring"} {...others} />);
}

export default Component;
