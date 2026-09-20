import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-70ey_po.css';
import '../../css/r/rwo6qqb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b-70ey_po"/><circle class="rwo6qqb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:award"} {...others} />);
}

export default Component;
