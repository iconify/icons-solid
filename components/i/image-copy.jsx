import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tliyki-wu.css';
import '../../css/s/s70ezsbfg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tliyki-wu"/><path class="s70ezsbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:image-copy"} {...others} />);
}

export default Component;
