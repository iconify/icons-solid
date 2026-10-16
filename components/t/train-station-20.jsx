import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v87_h9jef.css';
import '../../css/k/kb-m8o5vb.css';
import '../../css/v/vm-u7rbby.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v87_h9jef"/><path class="kb-m8o5vb"/><path class="vm-u7rbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-station-20"} {...others} />);
}

export default Component;
