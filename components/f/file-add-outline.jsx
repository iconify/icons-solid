import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx_lz50_l.css';
import '../../css/l/l2nst-b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nx_lz50_l"/><path class="l2nst-b0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:file-add-outline"} {...others} />);
}

export default Component;
