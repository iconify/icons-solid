import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl2h9z-2v.css';
import '../../css/o/o_t0ybbes.css';
import '../../css/e/ehtcwob1k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bl2h9z-2v"/><path class="o_t0ybbes"/><path class="ehtcwob1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:underground-cable-48"} {...others} />);
}

export default Component;
