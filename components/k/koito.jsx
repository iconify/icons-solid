import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgrj4e4gu.css';
import '../../css/x/xpheglbff.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rgrj4e4gu"/><path class="xpheglbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:koito"} {...others} />);
}

export default Component;
