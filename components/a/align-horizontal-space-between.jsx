import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_o499-3k.css';
import '../../css/a/aalswdj8y.css';
import '../../css/u/uqly_26np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="a_o499-3k"/><rect class="aalswdj8y"/><path class="uqly_26np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-horizontal-space-between"} {...others} />);
}

export default Component;
