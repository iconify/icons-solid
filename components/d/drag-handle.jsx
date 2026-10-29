import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsbk96brv.css';
import '../../css/o/odpdy0bir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsbk96brv"/><path class="odpdy0bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:drag-handle"} {...others} />);
}

export default Component;
