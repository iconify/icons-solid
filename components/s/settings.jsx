import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aud9bzb6h.css';
import '../../css/x/x4saxe2xe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aud9bzb6h"/><path class="x4saxe2xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:settings"} {...others} />);
}

export default Component;
