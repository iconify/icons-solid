import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii30vacbk.css';
import '../../css/m/m71xb3b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ii30vacbk"/><path class="m71xb3b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:external-link-filled"} {...others} />);
}

export default Component;
