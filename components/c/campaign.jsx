import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dpepl0bvc.css';
import '../../css/w/weeqpfh3n.css';
import '../../css/v/vu_fty9zr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dpepl0bvc"/><path class="weeqpfh3n"/><path class="vu_fty9zr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:campaign"} {...others} />);
}

export default Component;
