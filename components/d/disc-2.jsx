import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/x/x9ahn40kq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/><path class="x9ahn40kq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:disc-2"} {...others} />);
}

export default Component;
