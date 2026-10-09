import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suy8wqlre.css';
import '../../css/r/rxepc7-8f.css';
import '../../css/n/ni152fyap.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="suy8wqlre"/><path class="rxepc7-8f"/><path class="ni152fyap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:castle-20"} {...others} />);
}

export default Component;
