import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea-yh5bmv.css';
import '../../css/y/yscrwi0no.css';
import '../../css/f/fzgbg6_rc.css';
import '../../css/v/vqkge80ua.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ea-yh5bmv"/><path class="yscrwi0no"/><path class="fzgbg6_rc"/><path class="vqkge80ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:android"} {...others} />);
}

export default Component;
