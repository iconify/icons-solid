import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihhxc7j7l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ihhxc7j7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lore-epic-games-dark"} {...others} />);
}

export default Component;
