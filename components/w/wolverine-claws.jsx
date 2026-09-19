import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjvpa0utv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zjvpa0utv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:wolverine-claws"} {...others} />);
}

export default Component;
