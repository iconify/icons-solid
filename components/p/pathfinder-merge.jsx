import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee3nxnbiw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ee3nxnbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pathfinder-merge"} {...others} />);
}

export default Component;
