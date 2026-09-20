import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dm0kexnkt.css';
import '../../css/g/gwjpso23e.css';
import '../../css/l/lc1x4oxgh.css';
import '../../css/x/x23oeih7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dm0kexnkt"/><path class="gwjpso23e"/><path class="lc1x4oxgh"/><path class="x23oeih7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:locker-room-suitcase-umbrella"} {...others} />);
}

export default Component;
