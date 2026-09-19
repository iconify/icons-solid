import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxtqtcnph.css';
import '../../css/f/foequfu6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dxtqtcnph"/><path class="foequfu6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:list-sharp"} {...others} />);
}

export default Component;
