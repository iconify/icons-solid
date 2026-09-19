import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lcee_744z.css';
import '../../css/q/quqne-byv.css';
import '../../css/q/qm1qe08zp.css';
import '../../css/z/zhs-pukwe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3I1QMbiJ"><g class="aql7dnt-u"><path class="lcee_744z"/><path class="quqne-byv"/><path class="qm1qe08zp"/><path class="zhs-pukwe"/></g></mask></defs><path mask="url(#SVG3I1QMbiJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:database-setting"} {...others} />);
}

export default Component;
