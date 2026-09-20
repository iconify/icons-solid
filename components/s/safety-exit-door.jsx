import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r6knjfq9q.css';
import '../../css/f/fxwmdgbgf.css';
import '../../css/k/kd35jjh2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r6knjfq9q"/><path class="fxwmdgbgf"/><path class="kd35jjh2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:safety-exit-door"} {...others} />);
}

export default Component;
