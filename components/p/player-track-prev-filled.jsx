import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_lf64b6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_lf64b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:player-track-prev-filled"} {...others} />);
}

export default Component;
