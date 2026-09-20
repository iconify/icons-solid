import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zpb8b-bew.css';
import '../../css/z/zv0dk6neh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zpb8b-bew"/><path class="zv0dk6neh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wheelchair"} {...others} />);
}

export default Component;
