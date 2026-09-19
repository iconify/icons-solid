import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3wqb6ppo.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="v3wqb6ppo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:dna-double-helix"} {...others} />);
}

export default Component;
