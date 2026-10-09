import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4bjo-bjt.css';
import '../../css/v/v4ji3vb6c.css';
import '../../css/g/gqvbnmbwy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r4bjo-bjt"/><path class="v4ji3vb6c"/><path class="gqvbnmbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flange-20"} {...others} />);
}

export default Component;
