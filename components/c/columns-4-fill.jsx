import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgs_ek1rs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgs_ek1rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:columns-4-fill"} {...others} />);
}

export default Component;
