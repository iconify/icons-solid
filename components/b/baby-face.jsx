import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dzduor5dc.css';
import '../../css/l/l6ov_9bcy.css';
import '../../css/c/ces7xkb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="dzduor5dc"/><path class="l6ov_9bcy"/><path class="ces7xkb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:baby-face"} {...others} />);
}

export default Component;
