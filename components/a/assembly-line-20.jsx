import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_n5ny1ok.css';
import '../../css/m/m35anv3rp.css';
import '../../css/j/jayc3895l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d_n5ny1ok"/><path class="m35anv3rp"/><path class="jayc3895l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:assembly-line-20"} {...others} />);
}

export default Component;
