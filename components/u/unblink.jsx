import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkjeh0b9q.css';
import '../../css/w/wlr-0lgaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zkjeh0b9q"/><path class="wlr-0lgaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:unblink"} {...others} />);
}

export default Component;
