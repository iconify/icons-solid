import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1vzvobrg.css';
import '../../css/s/sco2ncz2j.css';
import '../../css/t/tgu2pcaid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1vzvobrg"/><path class="sco2ncz2j"/><path clip-rule="evenodd" class="tgu2pcaid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:card-game-card-spade"} {...others} />);
}

export default Component;
