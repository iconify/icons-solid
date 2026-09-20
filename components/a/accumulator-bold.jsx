import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhnamgxwy.css';
import '../../css/b/b6chai49q.css';
import '../../css/s/sg9dij81a.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGhLq0x4BW"><g class="ft5dv1b6b"><path class="dhnamgxwy"/><path class="b6chai49q"/><path clip-rule="evenodd" class="sg9dij81a"/></g></mask></defs><path mask="url(#SVGhLq0x4BW)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accumulator-bold"} {...others} />);
}

export default Component;
