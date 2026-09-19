import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/d2rpgdn0m.css';
import '../../css/b/b-8l0bc4p.css';
import '../../css/v/vddxckb1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4VFnCbas"><g class="rohhhzb0l"><path class="d2rpgdn0m"/><path class="b-8l0bc4p"/><path class="vddxckb1a"/></g></mask></defs><path mask="url(#SVG4VFnCbas)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chafing-dish"} {...others} />);
}

export default Component;
