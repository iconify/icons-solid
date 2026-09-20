import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ao-96ib1l.css';
import '../../css/u/ugw1omula.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ao-96ib1l"/><circle class="ugw1omula"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:notebook-dot"} {...others} />);
}

export default Component;
