import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/s/stjoksb_i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8So36clL"><g class="rohhhzb0l"><circle class="v_mrg_w2s"/><path class="stjoksb_i"/></g></mask></defs><path mask="url(#SVG8So36clL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sporting"} {...others} />);
}

export default Component;
