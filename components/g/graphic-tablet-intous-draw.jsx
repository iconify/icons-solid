import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xopt6g09k.css';
import '../../css/m/m4mtarblb.css';
import '../../css/e/e36jr6zuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xopt6g09k"/><path class="m4mtarblb"/><path class="e36jr6zuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:graphic-tablet-intous-draw"} {...others} />);
}

export default Component;
