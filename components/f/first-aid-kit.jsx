import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nro_fcb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nro_fcb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:first-aid-kit"} {...others} />);
}

export default Component;
