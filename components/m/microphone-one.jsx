import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kwlahtbzt.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/i/icfu2xbdv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDIdL4d6s"><g class="rohhhzb0l"><path class="kwlahtbzt"/><circle class="cplpj-rbo"/><path class="icfu2xbdv"/></g></mask></defs><path mask="url(#SVGDIdL4d6s)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:microphone-one"} {...others} />);
}

export default Component;
