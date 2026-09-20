import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfqar0b9x.css';
import '../../css/e/e6r_7bcqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tfqar0b9x"/><path class="e6r_7bcqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:route-off-fill"} {...others} />);
}

export default Component;
