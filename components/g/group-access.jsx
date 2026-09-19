import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj81mac8p.css';
import '../../css/b/b0-g4tear.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mj81mac8p"/><path class="b0-g4tear"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:group-access"} {...others} />);
}

export default Component;
