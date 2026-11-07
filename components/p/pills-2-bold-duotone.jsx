import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/x-qojpb3f.css';
import '../../css/o/o1cmcabyz.css';
import '../../css/f/fw6_ppcmg.css';
import '../../css/a/aclzoz_-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="x-qojpb3f"/><path class="o1cmcabyz"/></g><path class="fw6_ppcmg"/><path class="aclzoz_-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-2-bold-duotone"} {...others} />);
}

export default Component;
