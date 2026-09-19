import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ida2irumw.css';
import '../../css/s/s0g6i0bzp.css';
import '../../css/l/l7qkcz_ms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ida2irumw"/><path class="s0g6i0bzp"/><path class="l7qkcz_ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:arrow-move"} {...others} />);
}

export default Component;
