import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drkhbl8_m.css';
import '../../css/z/zyav6vbpo.css';
import '../../css/l/lfy2osnfb.css';
import '../../css/f/fgt9l6boy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drkhbl8_m"/><path class="zyav6vbpo"/><path class="lfy2osnfb"/><path clip-rule="evenodd" class="fgt9l6boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:viber-outline"} {...others} />);
}

export default Component;
