import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fk5ureeqq.css';
import '../../css/r/rjcmxr5np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fk5ureeqq"/><path class="rjcmxr5np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:badge-russian-ruble"} {...others} />);
}

export default Component;
