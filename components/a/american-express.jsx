import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyugebdld.css';
import '../../css/w/w238-db3l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nyugebdld"/><path class="w238-db3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:american-express"} {...others} />);
}

export default Component;
