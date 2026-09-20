import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvzt0qx4o.css';
import '../../css/u/uem9-5err.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvzt0qx4o"/><path class="uem9-5err"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:controls-slider-toggle-right"} {...others} />);
}

export default Component;
