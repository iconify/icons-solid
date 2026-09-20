import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n1yi6yvsv.css';
import '../../css/u/uqov-ibdi.css';
import '../../css/x/xx3inh7rz.css';
import '../../css/g/ggoszyzqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n1yi6yvsv"/><path class="uqov-ibdi"/><path class="xx3inh7rz"/><path class="ggoszyzqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:learning-programming-book"} {...others} />);
}

export default Component;
