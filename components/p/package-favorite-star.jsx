import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/ep8g6y8ws.css';
import '../../css/k/kqnw-3b_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ep8g6y8ws"/><path class="kqnw-3b_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:package-favorite-star"} {...others} />);
}

export default Component;
