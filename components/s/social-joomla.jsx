import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emgorab8j.css';
import '../../css/f/faez3bb4d.css';
import '../../css/p/pjip0acda.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="emgorab8j"/><path class="faez3bb4d"/><path class="pjip0acda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-joomla"} {...others} />);
}

export default Component;
