import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2mjsubix.css';
import '../../css/y/yut4brtiz.css';
import '../../css/i/iswbwirhc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2mjsubix"/><path class="yut4brtiz"/><path class="iswbwirhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-toxic-48-bold"} {...others} />);
}

export default Component;
