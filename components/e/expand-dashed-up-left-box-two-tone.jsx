import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zoniwibdn.css';
import '../../css/d/d10vn_dws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zoniwibdn"/><path class="d10vn_dws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-up-left-box-two-tone"} {...others} />);
}

export default Component;
