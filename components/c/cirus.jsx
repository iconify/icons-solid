import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf0vkme-f.css';
import '../../css/j/jf67airfk.css';
import '../../css/t/t7vqv2dny.css';
import '../../css/u/u2_ol8b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf0vkme-f"/><path class="jf67airfk"/><path class="t7vqv2dny"/><path class="u2_ol8b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cirus"} {...others} />);
}

export default Component;
