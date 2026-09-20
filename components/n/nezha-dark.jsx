import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6rr5ss6f.css';
import '../../css/s/s222euk2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w6rr5ss6f"/><path class="s222euk2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nezha-dark"} {...others} />);
}

export default Component;
