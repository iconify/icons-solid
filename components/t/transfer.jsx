import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha5ktc05w.css';
import '../../css/n/nw2_zeb4l.css';
import '../../css/f/f2jynqjlb.css';
import '../../css/i/izfv-wzfa.css';
import '../../css/j/jqrq48bfx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpiKwcd6c"><g class="ft5dv1b6b"><path class="ha5ktc05w"/><path class="nw2_zeb4l"/><path class="f2jynqjlb"/><circle class="izfv-wzfa"/><circle class="jqrq48bfx"/></g></mask></defs><path mask="url(#SVGpiKwcd6c)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:transfer"} {...others} />);
}

export default Component;
