import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iti6oabld.css';
import '../../css/r/r55hgqb1c.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/p/peqvy84ye.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4qpBsbof"><g class="rohhhzb0l"><rect class="iti6oabld"/><path class="r55hgqb1c"/><circle class="v_mrg_w2s"/><path class="peqvy84ye"/></g></mask></defs><path mask="url(#SVG4qpBsbof)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:woolen-hat"} {...others} />);
}

export default Component;
