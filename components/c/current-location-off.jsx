import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_cw8dy4r.css';
import '../../css/v/vrerg91sl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b_cw8dy4r"/><path class="vrerg91sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:current-location-off"} {...others} />);
}

export default Component;
