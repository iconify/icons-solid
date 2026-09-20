import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o38rzofgs.css';
import '../../css/e/eocvkab3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o38rzofgs"/><path class="eocvkab3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-previous-broken"} {...others} />);
}

export default Component;
