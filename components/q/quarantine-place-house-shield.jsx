import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/km9at4bxk.css';
import '../../css/j/jhucqqbwo.css';
import '../../css/a/aodbtw1pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="km9at4bxk"/><path class="jhucqqbwo"/><path class="aodbtw1pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-house-shield"} {...others} />);
}

export default Component;
