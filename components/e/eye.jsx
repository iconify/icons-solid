import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ppdzzsb6b.css';
import '../../css/m/m_n5e1bkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ppdzzsb6b"/><path class="m_n5e1bkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:eye"} {...others} />);
}

export default Component;
