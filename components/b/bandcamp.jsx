import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9p9bs7fm.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="x9p9bs7fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bandcamp"} {...others} />);
}

export default Component;
