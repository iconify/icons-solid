import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubixxqbpx.css';
import '../../css/r/rum39npnf.css';
import '../../css/c/cfji69bfw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ubixxqbpx"/><path class="rum39npnf"/><path class="cfji69bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammock-20"} {...others} />);
}

export default Component;
