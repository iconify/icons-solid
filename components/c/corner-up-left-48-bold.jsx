import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbyd0vbew.css';
import '../../css/b/bhk7a-jqs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tbyd0vbew"/><path class="bhk7a-jqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-left-48-bold"} {...others} />);
}

export default Component;
