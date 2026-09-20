import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugz22dbyb.css';
import '../../css/t/tqosrtbdi.css';
import '../../css/b/b87_h3bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ugz22dbyb"/><path class="tqosrtbdi"/><path class="b87_h3bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mop-sparkles"} {...others} />);
}

export default Component;
