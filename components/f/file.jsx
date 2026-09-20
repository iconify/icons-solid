import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/t/tvgm5h.css';
import '../../css/p/pciifw.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew tvgm5h"/><path class="iw1iew pciifw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file"} {...others} />);
}

export default Component;
