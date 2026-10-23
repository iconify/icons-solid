import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbepd9wuj.css';
import '../../css/v/vp9e6ghiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lbepd9wuj"/><path class="vp9e6ghiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:notebook-pen"} {...others} />);
}

export default Component;
