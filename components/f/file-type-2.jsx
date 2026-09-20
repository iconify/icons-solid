import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xugjf_9bj.css';
import '../../css/h/hh76apc7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xugjf_9bj"/><path class="hh76apc7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-type-2"} {...others} />);
}

export default Component;
