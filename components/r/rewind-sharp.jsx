import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq2_qrlix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cq2_qrlix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rewind-sharp"} {...others} />);
}

export default Component;
