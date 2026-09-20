import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uij4f5b-x.css';
import '../../css/g/gx4suybiw.css';
import '../../css/i/i2ivzmcfr.css';

const viewBox = {"width":141,"height":32};
const content = `<g class="uij4f5b-x"><path clip-rule="evenodd" class="gx4suybiw"/><path class="i2ivzmcfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:runpod"} {...others} />);
}

export default Component;
