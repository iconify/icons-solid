import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivro_3fld.css';
import '../../css/l/l6qh78cyh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ivro_3fld"/><path class="l6qh78cyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:pie-chart"} {...others} />);
}

export default Component;
