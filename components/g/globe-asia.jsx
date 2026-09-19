import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sukwxlkix.css';
import '../../css/y/y5p1me9xe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sukwxlkix"/><path class="y5p1me9xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-asia"} {...others} />);
}

export default Component;
