import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wih7av0dv.css';
import '../../css/g/gx2betbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wih7av0dv"/><path class="gx2betbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:folder-remove-outline"} {...others} />);
}

export default Component;
