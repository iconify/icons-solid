import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s49egpb6a.css';
import '../../css/s/shjni7sxm.css';
import '../../css/k/kpjpdmbqu.css';

const viewBox = {"width":256,"height":233};
const content = `<path class="s49egpb6a"/><path class="shjni7sxm"/><path class="kpjpdmbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:typeorm"} {...others} />);
}

export default Component;
