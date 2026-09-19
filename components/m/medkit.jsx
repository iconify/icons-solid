import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zop99obdj.css';
import '../../css/d/d0iebyb4a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zop99obdj"/><path class="d0iebyb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:medkit"} {...others} />);
}

export default Component;
