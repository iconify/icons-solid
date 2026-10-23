import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nl8ej1bwk.css';
import '../../css/g/grdyajb4w.css';
import '../../css/k/kzs6q0bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nl8ej1bwk"/><path class="grdyajb4w"/><path class="kzs6q0bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:images"} {...others} />);
}

export default Component;
