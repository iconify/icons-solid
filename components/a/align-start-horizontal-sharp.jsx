import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx_32i24f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sx_32i24f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-start-horizontal-sharp"} {...others} />);
}

export default Component;
