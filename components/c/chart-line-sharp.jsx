import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw0uxjbih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jw0uxjbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:chart-line-sharp"} {...others} />);
}

export default Component;
