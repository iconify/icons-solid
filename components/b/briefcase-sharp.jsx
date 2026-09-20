import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tipf2-b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tipf2-b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:briefcase-sharp"} {...others} />);
}

export default Component;
