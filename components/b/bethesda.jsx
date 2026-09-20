import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2csbibpu.css';
import '../../css/m/mkb8spb3x.css';
import '../../css/w/wyoo44k5i.css';

const viewBox = {"width":400,"height":187.485};
const content = `<g class="g2csbibpu"><path class="mkb8spb3x"/><path class="wyoo44k5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bethesda"} {...others} />);
}

export default Component;
