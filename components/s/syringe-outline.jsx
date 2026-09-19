import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5lolebbd.css';
import '../../css/x/xtcmkpb9n.css';
import '../../css/r/rzr-rcx2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q5lolebbd"/><path clip-rule="evenodd" class="xtcmkpb9n"/><path clip-rule="evenodd" class="rzr-rcx2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:syringe-outline"} {...others} />);
}

export default Component;
