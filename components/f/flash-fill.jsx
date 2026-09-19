import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlb_45vzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlb_45vzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:flash-fill"} {...others} />);
}

export default Component;
