import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w38rf6wii.css';
import '../../css/i/i9irkobgy.css';
import '../../css/d/dtgkxxb5c.css';
import '../../css/z/zgfhzacin.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w38rf6wii"/><path class="i9irkobgy"/><path class="dtgkxxb5c"/><path class="zgfhzacin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:lock-network"} {...others} />);
}

export default Component;
