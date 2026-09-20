import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ern78-ehy.css';
import '../../css/f/fw0wa3b7e.css';
import '../../css/l/lbze0hblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ern78-ehy"/><path class="fw0wa3b7e"/><path class="lbze0hblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-folder-robot-flat"} {...others} />);
}

export default Component;
