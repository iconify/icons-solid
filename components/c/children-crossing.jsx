import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur14uwb7l.css';
import '../../css/h/h-cp089_o.css';
import '../../css/t/teaoxxbwq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ur14uwb7l"/><path class="h-cp089_o"/><path class="teaoxxbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:children-crossing"} {...others} />);
}

export default Component;
