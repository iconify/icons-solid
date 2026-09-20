import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrpu6pbds.css';
import '../../css/r/rw33ohb9x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nrpu6pbds"/><path class="rw33ohb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:google-plus-square"} {...others} />);
}

export default Component;
