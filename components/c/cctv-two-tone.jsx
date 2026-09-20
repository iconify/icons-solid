import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_v9noxlo.css';
import '../../css/h/hyai77bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o_v9noxlo"/><path class="hyai77bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cctv-two-tone"} {...others} />);
}

export default Component;
