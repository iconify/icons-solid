import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4cgbq-0u.css';
import '../../css/v/vvblkl2ti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4cgbq-0u"/><path class="vvblkl2ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wifi-2"} {...others} />);
}

export default Component;
