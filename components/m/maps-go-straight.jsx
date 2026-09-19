import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lawl0y4tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lawl0y4tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:maps-go-straight"} {...others} />);
}

export default Component;
