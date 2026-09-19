import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4tqe28pg.css';
import '../../css/d/dy_9shbsz.css';
import '../../css/y/yr6e5mbng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4tqe28pg"/><rect class="dy_9shbsz"/><rect class="yr6e5mbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:horizontal-align-left-filled"} {...others} />);
}

export default Component;
