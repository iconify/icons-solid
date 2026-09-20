import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_zwl9bgs.css';
import '../../css/b/bfh7m_b-g.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e_zwl9bgs"/><path class="bfh7m_b-g"/><path class="imo26mlcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pin-heart"} {...others} />);
}

export default Component;
