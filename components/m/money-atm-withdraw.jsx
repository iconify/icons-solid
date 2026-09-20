import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b45uyl5ow.css';
import '../../css/l/lnz-_8qeq.css';
import '../../css/s/sogihwb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b45uyl5ow"/><path class="lnz-_8qeq"/><path class="sogihwb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-atm-withdraw"} {...others} />);
}

export default Component;
