import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yj4094b4l.css';
import '../../css/x/xkbv4mpwl.css';
import '../../css/j/jpebpm_il.css';
import '../../css/u/u1ym83bni.css';
import '../../css/a/a7g0cqbrg.css';
import '../../css/h/h-jgvl48d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSdjkRcoT"><g class="ft5dv1b6b"><path class="yj4094b4l"/><circle class="xkbv4mpwl"/><circle class="jpebpm_il"/><path class="u1ym83bni"/><path class="a7g0cqbrg"/><path class="h-jgvl48d"/></g></mask></defs><path mask="url(#SVGSdjkRcoT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:railway"} {...others} />);
}

export default Component;
