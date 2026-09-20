import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dj-63-b_b.css';
import '../../css/a/a8u5y1wor.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dj-63-b_b"/><path class="a8u5y1wor"/><circle class="shu3xdl9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:volleyball"} {...others} />);
}

export default Component;
