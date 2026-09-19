import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgyi2j3xy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xgyi2j3xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:dropwizard"} {...others} />);
}

export default Component;
