import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj0jfu1wv.css';
import '../../css/d/dx8_z4-2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sj0jfu1wv"/><path class="dx8_z4-2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sofa"} {...others} />);
}

export default Component;
