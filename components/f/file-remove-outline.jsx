import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx_lz50_l.css';
import '../../css/w/wih7av0dv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nx_lz50_l"/><path class="wih7av0dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:file-remove-outline"} {...others} />);
}

export default Component;
