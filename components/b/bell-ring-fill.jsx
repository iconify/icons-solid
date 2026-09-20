import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-8ntgb6v.css';
import '../../css/m/mmzbty-9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u-8ntgb6v"/><path class="mmzbty-9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-ring-fill"} {...others} />);
}

export default Component;
