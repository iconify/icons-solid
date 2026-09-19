import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf5_33bau.css';
import '../../css/n/nx_lz50_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf5_33bau"/><path class="nx_lz50_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:file-text-outline"} {...others} />);
}

export default Component;
