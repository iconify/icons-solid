import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8qfz9rzk.css';
import '../../css/u/u8dny2bmz.css';
import '../../css/o/oe2gxvaee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8qfz9rzk"/><path class="u8dny2bmz"/><path class="oe2gxvaee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:card-game-heart-bold"} {...others} />);
}

export default Component;
