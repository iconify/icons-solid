import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/q/qj82bibet.css';
import '../../css/d/dhb362b4k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGESoe8c1n"><g class="adexpl72i"><path class="qj82bibet"/><path class="dhb362b4k"/></g></mask></defs><path mask="url(#SVGESoe8c1n)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chart-pie"} {...others} />);
}

export default Component;
