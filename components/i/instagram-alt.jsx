import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mobv6wb_v.css';
import '../../css/j/jr13wwetb.css';
import '../../css/g/gvknz8zvu.css';
import '../../css/a/a-4ra4bvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mobv6wb_v"/><path class="jr13wwetb"/><path class="gvknz8zvu"/><path class="a-4ra4bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:instagram-alt"} {...others} />);
}

export default Component;
