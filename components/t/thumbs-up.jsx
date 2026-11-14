import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dxo2whbzy.css';
import '../../css/c/c_g8rfbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dxo2whbzy"/><rect class="c_g8rfbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:thumbs-up"} {...others} />);
}

export default Component;
