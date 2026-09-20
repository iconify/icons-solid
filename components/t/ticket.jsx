import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezz8hjg-s.css';
import '../../css/u/uj_v03r8a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ezz8hjg-s"/><path class="uj_v03r8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:ticket"} {...others} />);
}

export default Component;
