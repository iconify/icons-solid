import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o91b5sbba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o91b5sbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:app-windows-sharp"} {...others} />);
}

export default Component;
