import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajvnr0jez.css';
import '../../css/z/z0v2qxtbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ajvnr0jez"/><path class="z0v2qxtbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:battery-dead"} {...others} />);
}

export default Component;
