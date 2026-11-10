import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wdrknpbkl.css';
import '../../css/g/gnqe2d74g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wdrknpbkl"/><path class="gnqe2d74g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-flame"} {...others} />);
}

export default Component;
