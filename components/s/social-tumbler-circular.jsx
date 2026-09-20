import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc0e-ibjd.css';
import '../../css/y/ye74rhbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cc0e-ibjd"/><path class="ye74rhbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-tumbler-circular"} {...others} />);
}

export default Component;
