import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdaas3bt.css';
import '../../css/e/eh8plr3cl.css';
import '../../css/s/sgoachbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zjdaas3bt"/><path class="eh8plr3cl"/><path class="sgoachbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-document-duotone"} {...others} />);
}

export default Component;
