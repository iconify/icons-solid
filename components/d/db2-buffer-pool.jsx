import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwcqqit1h.css';
import '../../css/c/cpstsachi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mwcqqit1h"/><path class="cpstsachi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:db2-buffer-pool"} {...others} />);
}

export default Component;
