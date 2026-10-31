import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5ilxtjms.css';
import '../../css/s/s955xdbnr.css';
import '../../css/c/ckn7fwb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i5ilxtjms"/><path class="s955xdbnr"/><path class="ckn7fwb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:home"} {...others} />);
}

export default Component;
