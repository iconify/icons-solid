import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hvzoww4pc.css';
import '../../css/i/i5kx3z4xp.css';
import '../../css/o/o21zkob4d.css';
import '../../css/w/wrrac4-2g.css';
import '../../css/i/iuwjkbwol.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hvzoww4pc"/><path class="i5kx3z4xp"/><path class="o21zkob4d"/><path class="wrrac4-2g"/><path class="iuwjkbwol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:inbox-content"} {...others} />);
}

export default Component;
