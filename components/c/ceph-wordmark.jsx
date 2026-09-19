import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbc6z0ers.css';
import '../../css/s/s5gh9gbtv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zbc6z0ers"/><path class="s5gh9gbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ceph-wordmark"} {...others} />);
}

export default Component;
