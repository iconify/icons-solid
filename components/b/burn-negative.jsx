import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl95smbeo.css';
import '../../css/v/vlubr1ntv.css';
import '../../css/n/n4ze-o6yh.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBurnNegative0)"><path class="bl95smbeo"/><path class="vlubr1ntv"/><path clip-rule="evenodd" class="n4ze-o6yh"/></g><defs><clipPath id="healthiconsBurnNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:burn-negative"} {...others} />);
}

export default Component;
