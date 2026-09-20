import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u98105u5s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u98105u5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wearing-backpack-and-headlamp-crouching"} {...others} />);
}

export default Component;
