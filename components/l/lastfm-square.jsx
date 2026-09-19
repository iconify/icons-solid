import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wod8yol2x.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="wod8yol2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:lastfm-square"} {...others} />);
}

export default Component;
