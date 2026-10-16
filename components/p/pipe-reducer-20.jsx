import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwoi71b8l.css';
import '../../css/j/jql0-8iqc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iwoi71b8l"/><path class="jql0-8iqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-reducer-20"} {...others} />);
}

export default Component;
