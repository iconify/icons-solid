import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_m-4sfio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_m-4sfio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:musicbrainz"} {...others} />);
}

export default Component;
