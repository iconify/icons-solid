import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u15sy9b8v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u15sy9b8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:pipette"} {...others} />);
}

export default Component;
