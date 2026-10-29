import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz0t0xciq.css';
import '../../css/u/umqjyb9su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hz0t0xciq wm-k"/><path class="umqjyb9su wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-down-left"} {...others} />);
}

export default Component;
