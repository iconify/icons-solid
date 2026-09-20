import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvnf7s1_x.css';
import '../../css/r/r2uj8dq1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvnf7s1_x"/><path class="r2uj8dq1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:heart-duotone"} {...others} />);
}

export default Component;
