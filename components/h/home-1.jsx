import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i9w31vx7m.css';
import '../../css/u/ua4hl4bnb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="i9w31vx7m"/><path class="ua4hl4bnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:home-1"} {...others} />);
}

export default Component;
