import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je9v0ja6a.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="je9v0ja6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:facebook-square"} {...others} />);
}

export default Component;
