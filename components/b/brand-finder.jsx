import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlqa802zp.css';
import '../../css/b/bhx5qlbjq.css';
import '../../css/w/wtzbcrbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mlqa802zp"/><path class="bhx5qlbjq"/><path class="wtzbcrbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-finder"} {...others} />);
}

export default Component;
