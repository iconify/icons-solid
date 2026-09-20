import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrasw9bbm.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/l/lgruf5j3n.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="wrasw9bbm"/><path class="in5wtwq8h"/><path class="lgruf5j3n"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:a-button-blood-type"} {...others} />);
}

export default Component;
