import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2ektx8es.css';
import '../../css/g/gqe2_zrgi.css';
import '../../css/f/fp557ablp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2ektx8es"/><path class="gqe2_zrgi"/><path class="fp557ablp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:settings-screwdriver"} {...others} />);
}

export default Component;
