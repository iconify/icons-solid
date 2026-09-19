import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maz51bb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maz51bb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:crop-fill"} {...others} />);
}

export default Component;
