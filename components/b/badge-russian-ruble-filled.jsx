import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifilj8bay.css';
import '../../css/v/vw71kgb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifilj8bay"/><path clip-rule="evenodd" class="vw71kgb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:badge-russian-ruble-filled"} {...others} />);
}

export default Component;
