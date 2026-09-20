import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ezd6lzbxv.css';
import '../../css/b/b5bf5sbnp.css';
import '../../css/h/hs6tp-s_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ezd6lzbxv"/><path class="b5bf5sbnp"/><path class="hs6tp-s_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-off-two-tone"} {...others} />);
}

export default Component;
