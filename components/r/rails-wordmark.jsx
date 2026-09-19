import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze3tw4bhu.css';
import '../../css/i/ikfvhgbtv.css';
import '../../css/t/tl-xxku-t.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ze3tw4bhu"/><path class="ikfvhgbtv"/><path class="tl-xxku-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:rails-wordmark"} {...others} />);
}

export default Component;
