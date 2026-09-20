import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojochqbju.css';
import '../../css/y/y81o8wy_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojochqbju"/><path class="y81o8wy_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fitness-bicycle-1-bold"} {...others} />);
}

export default Component;
