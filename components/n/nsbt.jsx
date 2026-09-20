import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-4pu_zsf.css';
import '../../css/i/iqgs3ioxp.css';
import '../../css/w/wwby37bhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x-4pu_zsf"/><path class="iqgs3ioxp"/><path class="wwby37bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nsbt"} {...others} />);
}

export default Component;
