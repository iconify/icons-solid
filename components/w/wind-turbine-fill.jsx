import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lsal2z6ms.css';
import '../../css/p/pl9ryw_1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lsal2z6ms"/><path class="pl9ryw_1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wind-turbine-fill"} {...others} />);
}

export default Component;
