import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ys3zi_b1h.css';
import '../../css/s/sk2dmjbna.css';
import '../../css/t/tpdqzebpe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ys3zi_b1h"/><path clip-rule="evenodd" class="sk2dmjbna"/><path class="tpdqzebpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:card-game-diamond"} {...others} />);
}

export default Component;
