import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyn89ysya.css';
import '../../css/u/usuy8n_ud.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uyn89ysya"/><path class="usuy8n_ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-top-20"} {...others} />);
}

export default Component;
