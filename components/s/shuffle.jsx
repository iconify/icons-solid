import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucx_fxy2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucx_fxy2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:shuffle"} {...others} />);
}

export default Component;
