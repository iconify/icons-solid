import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t98sw_g9d.css';
import '../../css/q/q2gzyfm-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t98sw_g9d"/><path class="q2gzyfm-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:barcode-sca-fill"} {...others} />);
}

export default Component;
