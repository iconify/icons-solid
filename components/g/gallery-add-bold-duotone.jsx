import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5u34vbpt.css';
import '../../css/i/iwa9eupgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o5u34vbpt"/><path class="iwa9eupgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-add-bold-duotone"} {...others} />);
}

export default Component;
