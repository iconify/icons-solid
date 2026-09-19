import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zbsa-ujvj.css';
import '../../css/e/elnthojgr.css';
import '../../css/y/ysclwvbpv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjVZaGdHw"><g class="aql7dnt-u"><path class="zbsa-ujvj"/><path class="elnthojgr"/><path class="ysclwvbpv"/></g></mask></defs><path mask="url(#SVGjVZaGdHw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:kettle-one"} {...others} />);
}

export default Component;
