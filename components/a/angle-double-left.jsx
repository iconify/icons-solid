import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0b4cdb4f.css';
import '../../css/t/towwv1e5k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m0b4cdb4f"/><path class="towwv1e5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:angle-double-left"} {...others} />);
}

export default Component;
