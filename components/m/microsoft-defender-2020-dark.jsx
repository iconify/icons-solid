import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/josfuibqz.css';
import '../../css/r/rjrd0gg6j.css';
import '../../css/j/ji04dtbnw.css';
import '../../css/a/aw5lgtfph.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="josfuibqz"/><path class="rjrd0gg6j"/><path class="ji04dtbnw"/><path class="aw5lgtfph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-2020-dark"} {...others} />);
}

export default Component;
