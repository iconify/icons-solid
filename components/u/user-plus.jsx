import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2dydi33t.css';
import '../../css/t/t-u0yzblp.css';
import '../../css/q/q281whbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o2dydi33t"/><circle class="t-u0yzblp"/><path class="q281whbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-plus"} {...others} />);
}

export default Component;
