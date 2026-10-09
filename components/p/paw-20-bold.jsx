import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7aadjbad.css';
import '../../css/l/lthy19bnb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d7aadjbad"/><path class="lthy19bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paw-20-bold"} {...others} />);
}

export default Component;
