import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-b9rebna.css';
import '../../css/j/j12mv17hn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u-b9rebna"/><path class="j12mv17hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:geopoint-active"} {...others} />);
}

export default Component;
