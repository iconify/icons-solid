import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5lpn11ei.css';
import '../../css/l/lx_9i4uky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="s5lpn11ei"/><path class="lx_9i4uky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-list"} {...others} />);
}

export default Component;
