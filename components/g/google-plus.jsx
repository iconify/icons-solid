import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu2b7hb_r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nu2b7hb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:google-plus"} {...others} />);
}

export default Component;
