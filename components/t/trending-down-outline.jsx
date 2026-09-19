import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiee_78vg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiee_78vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:trending-down-outline"} {...others} />);
}

export default Component;
