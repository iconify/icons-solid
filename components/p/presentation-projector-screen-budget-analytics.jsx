import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jjfywviqd.css';
import '../../css/c/csm3i_bhj.css';
import '../../css/d/d58u2t8ks.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jjfywviqd"/><path class="csm3i_bhj"/><path class="d58u2t8ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:presentation-projector-screen-budget-analytics"} {...others} />);
}

export default Component;
