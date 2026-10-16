import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u54wvrbhl.css';
import '../../css/w/w1i6zjb6u.css';
import '../../css/a/ahp9osbzj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u54wvrbhl"/><path class="w1i6zjb6u"/><path class="ahp9osbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:savings-jar-48"} {...others} />);
}

export default Component;
