import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz4bd4kev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz4bd4kev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:angle-double-left"} {...others} />);
}

export default Component;
