import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4_gilfst.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w4_gilfst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:invisible-2-flat"} {...others} />);
}

export default Component;
