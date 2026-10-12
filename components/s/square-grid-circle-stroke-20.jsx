import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5lejhb4x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p5lejhb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:square-grid-circle-stroke-20"} {...others} />);
}

export default Component;
