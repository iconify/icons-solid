import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkvitjoyd.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9udutlcl.css';
import '../../css/k/k66sw15xl.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/o/o3hv9acql.css';
import '../../css/o/oec_pl54w.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGS9q3IkIf" class="jkvitjoyd"/></defs><g class="ft5dv1b6b"><use href="#SVGS9q3IkIf"/><path class="m9udutlcl"/><path class="k66sw15xl"/><g class="p_3zmsvya"><path class="o3hv9acql"/><use href="#SVGS9q3IkIf"/><path class="oec_pl54w"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:money"} {...others} />);
}

export default Component;
