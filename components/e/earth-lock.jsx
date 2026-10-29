import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vvpog7y9l.css';
import '../../css/l/leosdsb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vvpog7y9l"/><path class="leosdsb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:earth-lock"} {...others} />);
}

export default Component;
