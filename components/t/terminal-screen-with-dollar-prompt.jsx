import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojjmu_19i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ojjmu_19i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:terminal-screen-with-dollar-prompt"} {...others} />);
}

export default Component;
