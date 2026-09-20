import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt4-l-b3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pt4-l-b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:game-2-fill"} {...others} />);
}

export default Component;
