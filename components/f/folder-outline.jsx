import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8d_oebnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8d_oebnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:folder-outline"} {...others} />);
}

export default Component;
