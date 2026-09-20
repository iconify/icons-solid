import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t7g4c4b4t.css';
import '../../css/f/fck45lbed.css';
import '../../css/q/qjevf9b9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t7g4c4b4t"/><path class="fck45lbed"/><path class="qjevf9b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:party-alchoholic-drink-1"} {...others} />);
}

export default Component;
