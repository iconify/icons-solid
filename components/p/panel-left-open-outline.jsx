import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_6cwfbbm.css';
import '../../css/z/zoahz159d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_6cwfbbm"/><path clip-rule="evenodd" class="zoahz159d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-open-outline"} {...others} />);
}

export default Component;
