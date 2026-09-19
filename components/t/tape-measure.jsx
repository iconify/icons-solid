import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/onvwtm0bf.css';
import '../../css/e/exaospbay.css';
import '../../css/t/t_en-3qpu.css';
import '../../css/b/bukp5cceq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1b22Bedm"><g class="rohhhzb0l"><path class="onvwtm0bf"/><path class="exaospbay"/><circle class="t_en-3qpu"/><path class="bukp5cceq"/></g></mask></defs><path mask="url(#SVG1b22Bedm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tape-measure"} {...others} />);
}

export default Component;
