import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5fz0bc7g.css';
import '../../css/l/le5satbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o5fz0bc7g"/><circle class="le5satbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tag-plus"} {...others} />);
}

export default Component;
