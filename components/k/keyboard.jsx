import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cqg1h5bow.css';
import '../../css/i/iihv7544v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cqg1h5bow"/><path class="iihv7544v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:keyboard"} {...others} />);
}

export default Component;
