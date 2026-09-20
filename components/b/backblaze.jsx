import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn31dub8v.css';
import '../../css/c/ce504-bmg.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="fn31dub8v"/><path class="ce504-bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:backblaze"} {...others} />);
}

export default Component;
