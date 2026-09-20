import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meiu8obml.css';
import '../../css/g/gvguocbho.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="meiu8obml"/><path class="gvguocbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:cogs"} {...others} />);
}

export default Component;
