import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqpxm5d4f.css';
import '../../css/d/dwu4nv5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bqpxm5d4f"/><path class="dwu4nv5ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-x"} {...others} />);
}

export default Component;
