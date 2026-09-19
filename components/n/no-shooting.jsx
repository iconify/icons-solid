import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a9feyacll.css';
import '../../css/t/t93dzlbjh.css';
import '../../css/o/o6f548blr.css';
import '../../css/m/mmo-88bcm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTowT8d6U"><g class="rohhhzb0l"><path class="a9feyacll"/><path class="t93dzlbjh"/><path class="o6f548blr"/><circle class="mmo-88bcm"/></g></mask></defs><path mask="url(#SVGTowT8d6U)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:no-shooting"} {...others} />);
}

export default Component;
