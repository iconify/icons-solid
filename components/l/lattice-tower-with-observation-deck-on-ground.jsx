import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctfz9yp6p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ctfz9yp6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lattice-tower-with-observation-deck-on-ground"} {...others} />);
}

export default Component;
