import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri_2t2kgv.css';
import '../../css/w/w9r2jnnqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ri_2t2kgv"/><path class="w9r2jnnqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:twospeechbubbles"} {...others} />);
}

export default Component;
