import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ph4-94l6g.css';
import '../../css/r/rxgqp2cfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ph4-94l6g"/><path class="rxgqp2cfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rewind-forward-50"} {...others} />);
}

export default Component;
