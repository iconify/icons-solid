import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rbliukcje.css';
import '../../css/s/suo3rkklt.css';
import '../../css/v/v05-n5bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rbliukcje"/><path class="suo3rkklt"/><path class="v05-n5bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard-eject-button"} {...others} />);
}

export default Component;
