import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xerqgrbub.css';
import '../../css/a/audsyabir.css';
import '../../css/v/v6pfx7zrg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xerqgrbub"/><path class="audsyabir"/><path class="v6pfx7zrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hex-bolt-20-bold"} {...others} />);
}

export default Component;
