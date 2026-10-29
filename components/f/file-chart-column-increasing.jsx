import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5rnljtmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5rnljtmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-chart-column-increasing"} {...others} />);
}

export default Component;
