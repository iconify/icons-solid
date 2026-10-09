import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6a9xhbrm.css';
import '../../css/x/x8n4ul95g.css';
import '../../css/k/ksc_xx8rp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f6a9xhbrm"/><path class="x8n4ul95g"/><path class="ksc_xx8rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safe-48-bold"} {...others} />);
}

export default Component;
