import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jed2ko24i.css';

const viewBox = {"width":1792,"height":1280};
const content = `<path class="jed2ko24i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:lastfm"} {...others} />);
}

export default Component;
