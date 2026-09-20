import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9id3us9x.css';
import '../../css/g/gd_h2kbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9id3us9x"/><path class="gd_h2kbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:compose-24"} {...others} />);
}

export default Component;
