import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/abnnz4xbd.css';
import '../../css/z/zp9wmnb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="abnnz4xbd"/><path class="zp9wmnb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:radio-sharp-two-tone"} {...others} />);
}

export default Component;
