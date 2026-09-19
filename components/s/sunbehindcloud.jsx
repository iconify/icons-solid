import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb_xljp9g.css';
import '../../css/e/erkje89et.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hb_xljp9g"/><path class="erkje89et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunbehindcloud"} {...others} />);
}

export default Component;
